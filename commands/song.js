const fetch = require('node-fetch');
const yts = require('yt-search');

let handler = async (m, { text, conn }) => {
  if (!text) return m.reply('🎵 Provide a title!\nExample: *.song fade away*');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
    if (!res.ok) return m.reply('❌ Server error occurred.');

    const data = await res.json();
    if (!data.status || !data.result) return m.reply('❌ Invalid search or no result.');

    const { title, channel, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;

    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title,
          body: `${channel} • ${duration}`,
          mediaType: 2,
          thumbnailUrl: imageUrl,
          renderLargerThumbnail: true,
          sourceUrl: link,
          showAdAttribution: true
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('❌ Error occurred while processing audio.');
  }
};

handler.help = ['song'];
handler.tags = ['music'];
handler.command = ['song', 'play'];

module.exports = handler;
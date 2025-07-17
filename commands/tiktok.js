const { ttdl } = require("ruhend-scraper");
const axios = require('axios');

let handler = async (m, { q, conn }) => {
  if (!q) return m.reply('📌 Provide a search query!\n\nExample: *.playtiktok haikyuu edit*');

  try {
    const res = await axios.get(`https://apizell.web.id/download/tiktokplay?q=${encodeURIComponent(q)}`);
    const json = res.data;

    if (!json.status || !json.data || json.data.length === 0) {
      return m.reply('❌ No results found.');
    }

    const vid = json.data[0];
    const caption = `*🎬 Title:* ${vid.title}
*👤 Author:* ${vid.author}
*👁️ Views:* ${Number(vid.views || 0).toLocaleString()}
*📝 Description:* ${vid.desc || '-'}
`;

    await conn.sendMessage(m.chat, {
      video: { url: vid.url },
      caption,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: vid.title,
          body: `By ${vid.author} • ${Number(vid.views || 0).toLocaleString()} views`,
          mediaType: 1,
          thumbnailUrl: vid.thumbnail || 'https://i.ibb.co/8rJ9wXJ/default.jpg',
          mediaUrl: vid.url,
          sourceUrl: vid.url
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error('❌ TikTok Error:', e);
    m.reply('❌ Failed to get TikTok video. Try again later.');
  }
};

handler.help = ['playtiktok'];
handler.tags = ['tiktok'];
handler.command = ['playtiktok'];

module.exports = handler;
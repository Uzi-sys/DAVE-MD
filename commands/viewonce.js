const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const settings = require('../settings');
const fs = require('fs');
const path = require('path');

// Newsletter context for forwarded messages
const channelInfo = {
  contextInfo: {
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363400480173280@newsletter',
      newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
      serverMessageId: -1
    }
  }
};

let handler = async (m, { conn, text }) => {
  if (!m.quoted) return m.reply("✋🏽 Tag a *view once* media to unlock it.\n\n_Example: reply to a photo or video_");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!msg[type].viewOnce) return m.reply("❌ This is *not* a view-once message!");

  let stream = await downloadContentFromMessage(
    msg[type],
    type.includes('image') ? 'image' :
    type.includes('video') ? 'video' :
    'audio'
  );

  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }

  if (/video/.test(type)) {
    return await conn.sendMessage(m.chat, {
      video: buffer,
      caption: msg[type].caption || "🔓 View-once video unlocked by 𝐃𝐀𝐕𝐄-𝐌𝐃",
      ...channelInfo
    }, { quoted: m });
  } else if (/image/.test(type)) {
    return await conn.sendMessage(m.chat, {
      image: buffer,
      caption: msg[type].caption || "🖼️ View-once image unlocked by 𝐃𝐀𝐕𝐄-𝐌𝐃",
      ...channelInfo
    }, { quoted: m });
  } else if (/audio/.test(type)) {
    return await conn.sendMessage(m.chat, {
      audio: buffer,
      mimetype: "audio/mpeg",
      ptt: true,
      ...channelInfo
    }, { quoted: m });
  } else {
    return m.reply("⚠️ Unsupported media type.");
  }
};

handler.help = ['vv'];
handler.tags = ['openmedia'];
handler.command = ['vv'];

module.exports = handler;
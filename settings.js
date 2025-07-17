const fs = require("fs");

const settings = {
  // 🧠 Session & Bot Identity
  SESSION_ID: process.env.SESSION_ID || "creds", // Using creds.json session
  PREFIX: process.env.PREFIX || '.', // Command prefix
  BOT_NAME: process.env.BOT_NAME || "𝐃𝐀𝐕𝐄-𝐌𝐃",
  OWNER_NAME: process.env.OWNER_NAME || "Professor",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254104260236",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "254104260236",
  CAPTION: process.env.CAPTION || "Powered by 𝐃𝐀𝐕𝐄-𝐌𝐃",

  // ⚙️ Features
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === 'true',
  AUTO_READ: process.env.AUTO_READ === 'true',
  AUTO_BIO: process.env.AUTO_BIO === 'true',
  AUTO_TYPING: process.env.AUTO_TYPING === 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'true',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'true',
  AUTO_REACT: process.env.AUTO_REACT === 'true',
  AUTO_STICKER: process.env.AUTO_STICKER === 'true',
  ANTI_DELETE: process.env.ANTI_DELETE === 'true',
  ANTILINK: process.env.ANTILINK === 'true',
  ANTI_LEFT: process.env.ANTI_LEFT === 'true',
  WELCOME: process.env.WELCOME === 'true',
  CHAT_BOT: process.env.CHAT_BOT === 'true',
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  REJECT_CALL: process.env.REJECT_CALL === 'true',
  BLOCK_UNKNOWN: process.env.BLOCK_UNKNOWN === 'true',
  NOT_ALLOW: process.env.NOT_ALLOW !== 'false',

  // 🛠 Runtime
  MODE: process.env.MODE || "public",
  DELETED_MESSAGES_CHAT_ID: process.env.DELETED_MESSAGES_CHAT_ID || "254104260236@s.whatsapp.net",
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚',

  // 🌦️ Optional APIs (keep only what's used)
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || "",
  GPT_API_KEY: process.env.GPT_API_KEY || "", // Only if you use GPT
  GEMINI_KEY: process.env.GEMINI_KEY || "",   // Only if you use Gemini

  // 🖼️ Optional media tools
  giphyApiKey: process.env.GIPHY_API_KEY || "qnl7ssQChTdPjsKta2Ax2LMaGXz303tq",
};

module.exports = settings;
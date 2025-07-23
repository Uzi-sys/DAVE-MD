// github.js

async function githubCommand(conn, chatId) {
  const githubText = `
╭━===========================
┃ 📌 DAVE-MD REPO INFO 📌
┃ ⭐ Total Stars: 1,264
┃ 🍴 Total Forks: 5,610
┃ 🕰 Updated: 05/07/2025
╰━===========================
*ғᴏʀᴋ ᴀɴᴅ sᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ*

> https://github.com/giftedsession/DAVE-MD

For more info contact : +254104260236

®2025 𝐃𝐀𝐕𝐄 ᴛᴇᴄʜ🔥

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐃𝐀𝐕𝐄 ᴛᴇᴄʜ 👻
`;

  try {
    await conn.sendMessage(chatId, {
      image: { url: 'https://files.catbox.moe/30nl6i.jpg' },
      caption: githubText,
      contextInfo: {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363400480173280@newsletter",
          newsletterName: "DAVE-MD♀️",
          serverMessageId: -1
        }
      }
    });
  } catch (err) {
    console.error("Error in github command:", err);
    await conn.sendMessage(chatId, { text: "❌ Error sending repository info with image." });
  }
}

module.exports = githubCommand;

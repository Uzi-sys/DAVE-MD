const settings = require("../settings");
const os = require("os");

function runtime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
}

async function aliveCommand(sock, chatId, message) {
    try {
        const status = `
╭───〔 *🤖 BOT STATUS* 〕───◉
│✨ *Bot is Active & Online!*
│
│👨‍💻 *Owner:* Dave
│⚡ *Version:* ${settings.version || '1.0.0'}
│📝 *Prefix:* [${settings.prefix || '.'}]
│📳 *Mode:* [${settings.mode || 'Public'}]
│💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
│🖥️ *Host:* ${os.hostname()}
│⌛ *Uptime:* ${runtime(process.uptime())}
╰────────────────────◉
> *𝐏𝐎𝗪𝐄𝐑𝐄𝐃 𝐁𝐘 𝐃𝐀𝐕𝐄-𝐌𝐃*`;

        await sock.sendMessage(chatId, {
            image: { url: 'https://files.catbox.moe/vr83h2.jpg' },
            caption: status,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400480173280@newsletter',
                    newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: '❌ An error occurred: ' + error.message }, { quoted: message });
    }
}

module.exports = aliveCommand;
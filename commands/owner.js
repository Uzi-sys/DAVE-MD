const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.OWNER_NAME}
TEL;waid=${settings.OWNER_NUMBER}:${settings.OWNER_NUMBER}
END:VCARD
`;

    // Send vCard first
    await sock.sendMessage(chatId, {
        contacts: {
            displayName: settings.OWNER_NAME,
            contacts: [{ vcard }],
        },
    });

    // Send Channel Info
    const caption = `✨ *𝐃𝐀𝐕𝐄-𝐌𝐃* Official Channel
📢 Stay updated with latest features, updates & support.

🔗 *Channel:* https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k
👑 *Owner:* ${settings.OWNER_NAME}
📞 *Contact:* wa.me/${settings.OWNER_NUMBER}
    `.trim();

    await sock.sendMessage(chatId, {
        image: { url: "https://files.catbox.moe/vr83h2.jpg" }, // DAVE-XMD branding image
        caption,
        footer: "𝐃𝐀𝐕𝐄-𝐌𝐃",
        buttons: [
            {
                buttonId: `https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k`,
                buttonText: { displayText: "📢 View Channel" },
                type: 1,
            },
            {
                buttonId: `menu`,
                buttonText: { displayText: "🏠 Main Menu" },
                type: 1,
            },
        ],
        headerType: 4,
    });
}

module.exports = ownerCommand;
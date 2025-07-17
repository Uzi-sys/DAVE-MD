const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const settings = require('../settings');
const fs = require('fs');
const path = require('path');

// Channel info for message context
const channelInfo = {
    contextInfo: {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400480173280@newsletter',
            newsletterName: 'DAVE-MD',
            serverMessageId: -1
        }
    }
};

async function viewOnceCommand(sock, chatId, message, commandUsed = '.vv') {
    try {
        const from = message.key.remoteJid;
        const isEmojiReply = !!(message.message?.conversation?.match?.(/^[^\w\s]{1,2}[\s\S]{1,}/));

        // If it's an emoji-style message like "🤔 wow", send to inbox instead
        const targetJid = isEmojiReply ? message.key.participant || message.key.remoteJid : chatId;

        const quotedMsg = message.message?.extendedTextMessage?.contextInfo?.quotedMessage ||
                          message.message?.viewOnceMessage?.message;

        if (!quotedMsg) {
            await sock.sendMessage(chatId, { 
                text: '❌ Please reply to a view once image or video!',
                ...channelInfo
            });
            return;
        }

        const viewOnceImage = quotedMsg?.imageMessage || quotedMsg?.viewOnceMessage?.message?.imageMessage;
        const viewOnceVideo = quotedMsg?.videoMessage || quotedMsg?.viewOnceMessage?.message?.videoMessage;

        let media = viewOnceImage || viewOnceVideo;
        if (!media) {
            await sock.sendMessage(chatId, { 
                text: '❌ Could not detect view once message! Please reply to a view once image/video.',
                ...channelInfo
            });
            return;
        }

        const caption = media.caption || '';
        const fileType = viewOnceImage ? 'image' : 'video';

        const stream = await downloadContentFromMessage(media, fileType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        const sendOptions = {
            caption: `*💀 DAVE-MD Anti ViewOnce 💀*\n\n*Type:* ${fileType === 'image' ? 'Image 📸' : 'Video 📹'}\n${caption ? `*Caption:* ${caption}` : ''}`,
            ...channelInfo
        };

        sendOptions[fileType] = buffer;

        await sock.sendMessage(targetJid, sendOptions);

        console.log(`✅ Sent ${fileType} to ${targetJid} (${isEmojiReply ? 'Inbox' : 'Current Chat'})`);

    } catch (err) {
        console.error(`❌ Error in ${commandUsed} command:`, err);
        await sock.sendMessage(chatId, {
            text: `❌ Failed to process view once message! Error: ${err.message}`,
            ...channelInfo
        });
    }
}

module.exports = viewOnceCommand;
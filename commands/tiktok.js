const { ttdl } = require("ruhend-scraper");
const axios = require('axios');

const processedMessages = new Set();

async function tiktokCommand(sock, chatId, message) {
    try {
        if (processedMessages.has(message.key.id)) return;
        processedMessages.add(message.key.id);
        setTimeout(() => processedMessages.delete(message.key.id), 5 * 60 * 1000);

        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        if (!text) return sock.sendMessage(chatId, { text: "Please provide a TikTok link for the video." });

        const url = text.split(' ').slice(1).join(' ').trim();
        if (!url) return sock.sendMessage(chatId, { text: "Please provide a TikTok link for the video." });

        const isValidUrl = [
            /https?:\/\/(?:www\.)?tiktok\.com\//,
            /https?:\/\/(?:vm\.)?tiktok\.com\//,
            /https?:\/\/(?:vt\.)?tiktok\.com\//,
            /https?:\/\/(?:www\.)?tiktok\.com\/@/,
            /https?:\/\/(?:www\.)?tiktok\.com\/t\//
        ].some(pattern => pattern.test(url));

        if (!isValidUrl) {
            return sock.sendMessage(chatId, { text: "That is not a valid TikTok link." });
        }

        await sock.sendMessage(chatId, { react: { text: '🔄', key: message.key } });

        try {
            let downloadData = await ttdl(url);

            // Use your new API as fallback
            if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
                const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${encodeURIComponent(url)}`;
                const { data } = await axios.get(apiUrl);

                if (data && data.video && data.video.no_watermark) {
                    return sock.sendMessage(chatId, {
                        video: { url: data.video.no_watermark },
                        mimetype: "video/mp4",
                        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝐃𝐀𝐕𝐄-𝐌𝐃"
                    }, { quoted: message });
                }
            }

            if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
                return sock.sendMessage(chatId, { text: "No media found at the provided link." });
            }

            for (let i = 0; i < Math.min(20, downloadData.data.length); i++) {
                const media = downloadData.data[i];
                const mediaUrl = media.url;
                const isVideo = /\.(mp4|mov|avi|mkv|webm)$/i.test(mediaUrl) || media.type === 'video';

                if (isVideo) {
                    await sock.sendMessage(chatId, {
                        video: { url: mediaUrl },
                        mimetype: "video/mp4",
                        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝐃𝐀𝐕𝐄-𝐌𝐃"
                    }, { quoted: message });
                } else {
                    await sock.sendMessage(chatId, {
                        image: { url: mediaUrl },
                        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝐃𝐀𝐕𝐄-𝐌𝐃"
                    }, { quoted: message });
                }
            }
        } catch (error) {
            console.error('TikTok download error:', error);
            return sock.sendMessage(chatId, { text: "❌ Failed to download TikTok video. Try again later." });
        }
    } catch (error) {
        console.error('TikTok command error:', error);
        await sock.sendMessage(chatId, { text: "❌ An error occurred. Try again later." });
    }
}

module.exports = tiktokCommand;
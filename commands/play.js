const yts = require('yt-search');
const axios = require('axios');

async function playCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();

        if (!searchQuery) {
            return await sock.sendMessage(chatId, {
                text: "🎵 Please type the song name after the command.\n\nExample: `.play perfect ed sheeran`"
            });
        }

        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
            return await sock.sendMessage(chatId, {
                text: "🚫 No matching songs found!"
            });
        }

        const video = videos[0];
        const urlYt = video.url;

        await sock.sendMessage(chatId, {
            text: "⏳ Downloading your song, please wait..."
        });

        // Fallback to yt5s API
        const response = await axios.get(`https://yt5s.vercel.app/api/ytmp3?url=${urlYt}`);
        const data = response.data;

        if (!data?.url?.audio) {
            return await sock.sendMessage(chatId, {
                text: "❌ Unable to fetch audio. Please try again later."
            });
        }

        const audioUrl = data.url.audio;
        const title = data.title || "Audio";

        await sock.sendMessage(chatId, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            fileName: `${title}.mp3`
        }, { quoted: message });

    } catch (err) {
        console.error("Error in .play command:", err);
        await sock.sendMessage(chatId, {
            text: "⚠️ Song download failed. Please try again later."
        });
    }
}

module.exports = playCommand;
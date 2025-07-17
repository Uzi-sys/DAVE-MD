const ytdl = require('ytdl-core');
const yts = require('yt-search');
const fs = require('fs');
const path = require('path');

async function videoCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();

        if (!searchQuery) {
            await sock.sendMessage(chatId, { text: 'What video do you want to download?' }, { quoted: message });
            return;
        }

        // Get video URL from yt-search or direct link
        let videoUrl = '';
        if (searchQuery.startsWith('http://') || searchQuery.startsWith('https://')) {
            videoUrl = searchQuery;
        } else {
            const { videos } = await yts(searchQuery);
            if (!videos || videos.length === 0) {
                await sock.sendMessage(chatId, { text: 'No videos found!' }, { quoted: message });
                return;
            }
            videoUrl = videos[0].url;
        }

        if (!ytdl.validateURL(videoUrl)) {
            await sock.sendMessage(chatId, { text: 'Not a valid YouTube URL.' }, { quoted: message });
            return;
        }

        const info = await ytdl.getInfo(videoUrl);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, '') || 'video';

        const tempDir = path.join(__dirname, '../temp');
        if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

        const tempFile = path.join(tempDir, `${Date.now()}_${title}.mp4`);

        const stream = ytdl(videoUrl, {
            quality: 'lowest', // use 'highestvideo' if you want HD
            filter: format => format.container === 'mp4' && format.hasVideo && format.hasAudio
        });

        const writeStream = fs.createWriteStream(tempFile);

        stream.pipe(writeStream);

        stream.on('end', async () => {
            await sock.sendMessage(chatId, {
                video: { url: tempFile },
                mimetype: 'video/mp4',
                caption: `*${title}*\n\n> *_Downloaded by 𝐃𝐀𝐕𝐄-𝐌𝐃_*`
            }, { quoted: message });

            setTimeout(() => {
                try { if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile); } catch {}
            }, 10000);
        });

        stream.on('error', async err => {
            console.error('Video stream error:', err);
            await sock.sendMessage(chatId, { text: 'Failed to download video.' }, { quoted: message });
        });

    } catch (err) {
        console.error('Video command error:', err.message);
        await sock.sendMessage(chatId, { text: `Error: ${err.message}` }, { quoted: message });
    }
}

module.exports = videoCommand;
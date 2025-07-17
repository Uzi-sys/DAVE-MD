/* Créditos A Quien Correspondan Play Traido y Editado Por Cuervo-Team-Supreme */ const axios = require('axios'); const crypto = require('crypto'); const yts = require('yt-search'); const fs = require('fs'); const path = require('path');

async function songCommand(sock, chatId, message) { try { const text = message.message?.conversation || message.message?.extendedTextMessage?.text; const searchQuery = text.split(' ').slice(1).join(' ').trim(); if (!searchQuery) { return await sock.sendMessage(chatId, { text: "What song do you want to download?" }); }

// Determine if input is a YouTube link or search query
    let videoUrl = '';
    if (searchQuery.startsWith('http://') || searchQuery.startsWith('https://')) {
        videoUrl = searchQuery;
    } else {
        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
            return await sock.sendMessage(chatId, { text: "No songs found!" });
        }
        videoUrl = videos[0].url;
    }

    // Use yt5s for download instead
    let ytId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop();
    const apiUrl = `https://api.yt5s.pro/api/button/mp3/${ytId}`;

    const { data: downloadData } = await axios.get(apiUrl);

    if (!downloadData || !downloadData.url || !downloadData.title) {
        return await sock.sendMessage(chatId, { text: "Failed to fetch audio from the API. Please try again later." });
    }

    const tempDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const tempFile = path.join(tempDir, `${Date.now()}.mp3`);

    const response = await axios({ url: downloadData.url, method: 'GET', responseType: 'stream' });
    const writer = fs.createWriteStream(tempFile);
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });

    await sock.sendMessage(chatId, {
        audio: { url: tempFile },
        mimetype: "audio/mpeg",
        fileName: `${downloadData.title}.mp3`,
        ptt: false
    }, { quoted: message });

    setTimeout(() => {
        try {
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        } catch {}
    }, 5000);

} catch (error) {
    await sock.sendMessage(chatId, { text: "Download failed. Please try again later." });
}

}

module.exports = songCommand;


const os = require('os');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days) time += `${days}d `;
    if (hours) time += `${hours}h `;
    if (minutes) time += `${minutes}m `;
    if (seconds) time += `${seconds}s`;

    return time.trim();
}

async function pingCommand(sock, chatId) {
    try {
        const start = Date.now();
        await new Promise(resolve => setTimeout(resolve, 100));
        const end = Date.now();
        const ping = Math.round(end - start);

        const uptime = formatTime(os.uptime());
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(0);
        const freeMem = (os.freemem() / 1024 / 1024).toFixed(0);
        const usedMem = totalMem - freeMem;

        const systemInfo = `*𝗕𝗼𝘁:* 𝐃𝐀𝐕𝐄-𝐌𝐃\n` +
                           `*𝗣𝗼𝗻𝗴:* ${ping} ms\n` +
                           `*𝗨𝗽𝘁𝗶𝗺𝗲:* ${uptime}\n` +
                           `*𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺:* ${os.platform()} ${os.arch()}\n` +
                           `*𝗥𝗔𝗠:* ${usedMem} MB / ${totalMem} MB`;

        await sock.sendMessage(chatId, { text: systemInfo });
    } catch (error) {
        console.error('Error in ping command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to get ping status.' });
    }
}

module.exports = pingCommand;
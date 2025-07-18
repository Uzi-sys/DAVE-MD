async function pingCommand(sock, chatId) {
  try {
    const start = Date.now();
    await sock.sendMessage(chatId, { text: 'Calculating speed... ⏱️' });

    const ping = Date.now() - start;
    const response = `𝐃𝐀𝐕𝐄-𝐌𝐃 speed: ${ping} ms ⚡`;

    await sock.sendMessage(chatId, { text: response });
  } catch (error) {
    console.error('Ping error:', error);
    await sock.sendMessage(chatId, { text: 'Failed to measure speed.' });
  }
}

module.exports = pingCommand;
let handler = async (m, { conn, q }) => {
  let target;

  if (m.mentionedJid?.length) {
    target = m.mentionedJid[0];
  } else if (m.quoted?.sender) {
    target = m.quoted.sender;
  } else if (q) {
    const number = q.replace(/[^0-9]/g, '');
    target = number + '@s.whatsapp.net';
  } else {
    return m.reply('📌 Usage: .getpp @user or reply or number');
  }

  try {
    const pp = await conn.profilePictureUrl(target, 'image').catch(() => null);
    if (!pp) return m.reply('❌ Profile picture is hidden or unavailable.');

    await conn.sendMessage(m.chat, {
      image: { url: pp },
      caption: `📸 Profile Picture of: *${target.split('@')[0]}*`
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('❌ Error fetching profile picture.');
  }
};

handler.help = ['getpp'];
handler.tags = ['dp'];
handler.command = ['getpp'];
handler.owner = true; // 🔐 Optional: Only owner can use

module.exports = handler;
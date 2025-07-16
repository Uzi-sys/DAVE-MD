// GIFTEDDAVE PROPERTY 😊

const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, m, quoted) {
    const helpText = `
╭━━━《 𝗗𝗔𝗩𝗘-𝗠𝗗 ⚡》━━━━━┈⊷
┃❍⁠⁠╭─────────────────────────────
┃❍⁠⁠│▸  𝗨𝘀𝗲𝗿      : 𝙂𝙞𝙛𝙩𝙚𝙙 𝘿𝙖𝙫𝙚 👑
┃❍⁠⁠│▸  𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺   : 𝙃𝙚𝙧𝙤𝙠𝙪
┃❍⁠⁠│▸  𝗢𝘄𝗻𝗲𝗿     : +254104260236
┃❍⁠⁠│▸  𝗣𝗿𝗲𝗳𝗶𝘅     : |.|
┃❍⁠⁠│▸  𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: 𝟮𝟭𝟰 📜
┃❍⁠⁠│▸  𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐆𝐈𝐅𝐓𝐄𝐃 𝐃𝐀𝐕𝐄 💻
┃❍⁠⁠│▸  𝗩𝗲𝗿𝘀𝗶𝗼𝗻   : 𝟮.𝟬.𝟬 🚀
┃❍⁠⁠╰─────────────────────────────
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┈⊷

*📖 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦:*

╭━⟪ 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ⟫━┈⊷
┃ • help  
┃ • .menu  
┃ • ping  
┃ • alive  
┃ • tts  
┃ • owner  
┃ • joke  
┃ • quote  
┃ • fact  
┃ • weather  
┃ • news  
┃ • attp  
┃ • lyrics  
┃ • 8ball  
┃ • groupinfo  
┃ • staff  
┃ • .admins  
┃ • vv  
┃ • trt  
┃ • ss  
┃ • jid  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗔𝗗𝗠𝗜𝗡 ⟫━┈⊷
┃ • ban  
┃ • kick  
┃ • promote  
┃ • demote  
┃ • mute  
┃ • unmute  
┃ • delete  
┃ • .del  
┃ • warnings  
┃ • warn  
┃ • antilink  
┃ • antibadword  
┃ • clear  
┃ • tag  
┃ • tagall  
┃ • chatbot  
┃ • welcome  
┃ • goodbye  
┃ • resetlink  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗢𝗪𝗡𝗘𝗥 ⟫━┈⊷
┃ • mode  
┃ • autostatus  
┃ • clearsession  
┃ • cleartmp  
┃ • setpp  
┃ • .antidelete  
┃ • autoreact  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗜𝗠𝗔𝗚𝗘 / 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ⟫━┈⊷
┃ • blur  
┃ • simage  
┃ • sticker  
┃ • tgsticker  
┃ • meme  
┃ • take  
┃ • emojimix  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗚𝗔𝗠𝗘𝗦 ⟫━┈⊷
┃ • .tictactoe  
┃ • .hangman  
┃ • .guess  
┃ • .trivia  
┃ • .answer  
┃ • .truth  
┃ • .dare  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗔𝗜 ⟫━┈⊷
┃ • .gpt  
┃ • .gemini  
┃ • .imagine  
┃ • .flux  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗙𝗨𝗡 ⟫━┈⊷
┃ • .compliment  
┃ • .insult  
┃ • .flirt  
┃ • .shayari  
┃ • .goodnight  
┃ • .roseday  
┃ • .character  
┃ • .wasted  
┃ • .ship  
┃ • .simp  
┃ • .stupid  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 ⟫━┈⊷
┃ • metallic  
┃ • ice  
┃ • snow  
┃ • impressive  
┃ • matrix  
┃ • light  
┃ • neon  
┃ • devil  
┃ • purple  
┃ • thunder  
┃ • leaves  
┃ • 1917  
┃ • arena  
┃ • hacker  
┃ • sand  
┃ • blackpink  
┃ • glitch  
┃ • fire  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ⟫━┈⊷
┃ • play  
┃ • song  
┃ • instagram  
┃ • facebook  
┃ • tiktok  
┃ • video  
┃ • ytmp4  
╰━━━━━━━━━━━━━━━┈⊷

╭━⟪ 𝗚𝗜𝗧𝗛𝗨𝗕 ⟫━┈⊷
┃ • git  
┃ • github  
┃ • sc  
┃ • script  
┃ • repo  
╰━━━━━━━━━━━━━━━┈⊷

> ⚙️ 𝙍𝙀𝙂𝘼𝙍𝘿𝙎 : 𝗗𝗔𝗩𝗘 𝗧𝗘𝗖𝗛 👻
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            const botImage = fs.readFileSync(imagePath);
            await sock.sendMessage(m, {
                image: botImage,
                caption: helpText,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363400480173280@newsletter",
                        newsletterName: "POWERED BY GIFTEDDAVE TECH",
                        serverMessageId: -1,
                    }
                }
            }, { quoted });
        } else {
            console.error("Bot image not found at:", imagePath);
            await sock.sendMessage(m, {
                text: helpText,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363400480173280@newsletter",
                        newsletterName: "POWERED BY GIFTEDDAVE TECH",
                        serverMessageId: -1,
                    }
                }
            });
        }
    } catch (err) {
        console.error("Error in help command:", err);
        await sock.sendMessage(m, { text: helpText });
    }
}

module.exports = helpCommand;
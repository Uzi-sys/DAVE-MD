// GIFTEDDAVE PROPERTY 😊

const _0x5c3c=['../settings','fs','path','join','__dirname','../assets/bot_image.jpg','existsSync','readFileSync','sendMessage','image','caption','contextInfo','forwardingScore','isForwarded','forwardedNewsletterMessageInfo','newsletterJid','120363400480173280@newsletter','newsletterName','POWERED BY GIFTEDDAVE TECH','serverMessageId','quoted','console','error','Bot image not found at:','text','Error in help command:','module','exports'];(function(_0x1be0bf,_0x5e3b4d){const _0x2e7e8a=function(_0x1c69b8){while(--_0x1c69b8){_0x1be0bf['push'](_0x1be0bf['shift']());}};_0x2e7e8a(++_0x5e3b4d);}(_0x5c3c,0x1d));const _0x4f9e=function(_0x1be0bf,_0x5e3b4d){_0x1be0bf=_0x1be0bf-0x0;let _0x2e7e8a=_0x5c3c[_0x1be0bf];return _0x2e7e8a;};

const settings = require(_0x4f9e(0x0));
const fs = require(_0x4f9e(0x1));
const path = require(_0x4f9e(0x2));

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
        const imagePath = path[_0x4f9e(0x3)](global[_0x4f9e(0x4)],_0x4f9e(0x5));
        if (fs[_0x4f9e(0x6)](imagePath)) {
            const botImage = fs[_0x4f9e(0x7)](imagePath);
            await sock[_0x4f9e(0x8)](m, {
                [_0x4f9e(0x9)]: botImage,
                [_0x4f9e(0xa)]: helpText,
                [_0x4f9e(0xb)]: {
                    [_0x4f9e(0xc)]: 1,
                    [_0x4f9e(0xd)]: true,
                    [_0x4f9e(0xe)]: {
                        [_0x4f9e(0xf)]: _0x4f9e(0x10),
                        [_0x4f9e(0x11)]: _0x4f9e(0x12),
                        [_0x4f9e(0x13)]: -1,
                    }
                }
            }, { [_0x4f9e(0x14)]: quoted });
        } else {
            global[_0x4f9e(0x15)][_0x4f9e(0x16)](_0x4f9e(0x17), imagePath);
            await sock[_0x4f9e(0x8)](m, {
                [_0x4f9e(0x18)]: helpText,
                [_0x4f9e(0xb)]: {
                    [_0x4f9e(0xc)]: 1,
                    [_0x4f9e(0xd)]: true,
                    [_0x4f9e(0xe)]: {
                        [_0x4f9e(0xf)]: _0x4f9e(0x10),
                        [_0x4f9e(0x11)]: _0x4f9e(0x12),
                        [_0x4f9e(0x13)]: -1,
                    }
                }
            });
        }
    } catch (err) {
        global[_0x4f9e(0x15)][_0x4f9e(0x16)](_0x4f9e(0x19), err);
        await sock[_0x4f9e(0x8)](m, { [_0x4f9e(0x18)]: helpText });
    }
}

global[_0x4f9e(0x1a)][_0x4f9e(0x1b)] = helpCommand;
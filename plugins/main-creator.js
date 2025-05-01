let handler = async (m, { conn, text }) => {
let txt = `
\`\`\`Hello @${m.sender.split('@')[0]}! Below I will provide you with both the contact of my creator and the official groups of the bot.\`\`\` 🌱

 🌷 \`Creator :\`
 • @5491156178758
 
 🌾 \`Official Group 1 :\`
 • @120363383284446698@g.us
 
 🌿 \`Official Group 2 :\`
 • @120363383284446698@g.us
 
🌴 \`\`\`Remember to follow our channels to find out about updates to the bot, as well as general information and much more!\`\`\`

 🌲 \`Official channel 1 :\`
 • https://whatsapp.com/channel/0029Vb5oaHFCBtxIGWefdp0n
 
 🍄 \`Official channel 2 :\`
 • https://whatsapp.com/channel/0029Vb5oaHFCBtxIGWefdp0n
`
conn.relayMessage(m.chat, {
      extendedTextMessage: {
        text: txt,
        contextInfo: {
          mentionedJid: conn.parseMention(txt),
          groupMentions: [
    	            {
    		            groupSubject: await conn.getName(`120363383284446698@g.us`),
    		            groupJid: `120363383284446698@g.us`,
    	            },
    	            {
    	                groupSubject: await conn.getName(`120363383284446698@g.us`),
    		            groupJid: `120363383284446698@g.us`,
    	            },
                ],
          externalAdReply: {
            title: wm,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true,
            thumbnail: fs.readFileSync('./src/menu_logo.jpg'),
            sourceUrl: "https://whatsapp.com/channel/0029Vb5oaHFCBtxIGWefdp0n",
          }
        }, mentions: [m.sender]
      }
    }, { quoted: fkontak });
 }
handler.command = ['owner', 'creador', 'grupos', 'groups', 'creator']
handler.help = ['owner', 'grupos']
handler.tags = ['main']
export default handler

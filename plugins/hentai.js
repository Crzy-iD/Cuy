let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/hentaigif?APIKEY=Dawnfrostkey', 'hentai.gif', 'Emang Beban Ortu...', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['bkp', 'bokep']
handler.tags = ['bebanortu']

handler.command = /^(hentai)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler

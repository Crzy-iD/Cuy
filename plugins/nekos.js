let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
conn.sendFile(m.chat, 'https://api.waifu.pics/sfw/neko', 'asupan.jpg', 'Emang Beban Ortu...', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['nekos']
handler.tags = ['bebanortu']

handler.command = /^(nekos)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler

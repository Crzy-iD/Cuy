let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
conn.sendFile(m.chat, 'https://api.dhamzxploit.my.id/api/nsfw/waifu', 'asupan.jpg', 'Emang Beban Ortu...', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['nekos2']
handler.tags = ['bebanortu']

handler.command = /^(nekos2)$/i
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler

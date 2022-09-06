let handler = async (m, { conn }) => {
	//tolong jngan diganti atau dihapus u cuma make
    let txt = `Hai Kak, Bot Ini Menggunakan Sc Pribadi Ya, Kalau Mau Kakak Bisa Beli Scnya Di Owner Aku
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler



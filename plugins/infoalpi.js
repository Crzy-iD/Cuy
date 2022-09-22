let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Infomasi Crzy Owner* ´ˎ˗
│ ✎ _Nama_ : Zena(samaran)
│ ✎ _Sekolah_ : Lulusan smp:)
│ ✎ _Umur_ : 18yo
│ ✎ _Asal_ : Jakarta
│ ✎ _Status_ : Pekerja
│ ✎ _WhatsApp_ :
│    wa.me/6285814417473
╰──────────────
`.trim(), m)
}

handler.help = ['infoZenn']
handler.tags = ['main', 'utama']
handler.command = /^(infozenn)$/i

handler.exp = 150

module.exports = handler

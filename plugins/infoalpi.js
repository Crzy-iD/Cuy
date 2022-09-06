let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Infomasi Kenn Owner* ´ˎ˗
│ ✎ _Nama_ : Gusti
│ ✎ _Sekolah_ : SMA 3 KUTA
│ ✎ _Umur_ : 16
│ ✎ _Asal_ : BALI
│ ✎ _Status_ : Pelajar SMA
│ ✎ _WhatsApp_ :
│    wa.me/6281238142144
╰──────────────
`.trim(), m)
}

handler.help = ['infokenn']
handler.tags = ['main', 'utama']
handler.command = /^(infokenn)$/i

handler.exp = 150

module.exports = handler

let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/`
    // if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "Admin mah bebas slurd" : `\nGroup Link Detected, But ${global.namabot} Not Admin, So Cant Kick User`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nLink Group Terdeteksi, bye Kamu Akan Di Kick!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler

let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let prefix = usedPrefix
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = fs.readFileSync('./src/profil.jpg')
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
  
    let { name, premium, premiumTime, atm, limit, warning, money, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let maxexp = xp
    let expkrg = max - exp
    let username = conn.getName(who)
    let discriminator = who.substring(9, 13)
   /* let mamtap = API('caliph', '/api/rank', {
                                rank: role,
                                pp: pp,
                                level: level,
                                currentxp: exp,
                                needxp: maxexp,
                                name: username,
                                discriminator: discriminator,
                            })*/
   // let anjg = https://caliphapi.com/api/rank?rank=1&pp=https://i.ibb.co/G5mJZxs/rin.jpg&level=1&currentxp=69&needxp=100&name=caliph&discriminator=1234&apikey=LAsTZSiP
    let str = `
╭─── *PROFILE* ───✾
│•> Name: ${username}
│•> Premium: ${premium ? `${conn.msToDate(premiumTime - new Date() * 1)}` : 'Gratisan'}
│•> Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│•> Umur: *${age == '-1' ? 'Belum Daftar' : age}*
│•> Link: wa.me/${m.sender.split`@`[0]}
│•> Level: *${level}*
│•> Rank : *${role}*
│•> Limit: *${limit}*
│•> Atm: *${atm}*
│•> Money: *${money}*
│•> Exp  : *${exp} XP* ( Kurang ${expkrg} Untuk Levelup )
│•> Warning : *${warning}*
╰───────────────────
`.trim()
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'aulaj.jpg', str, m, false, { contextInfo: { mentionedJid }})
  //  conn.sendTemplateButtonFakeImg(m.chat, mamtap, str, wm, 'Menu', `${prefix}menu`, { mentions: [m.sender] })
  //  conn.send3TemplateButtonImg(m.chat, mamtap, str,
    //conn.send2ButtonLoc(m.chat, await (await fetch(pp)).buffer(), str, wm, `Menu`, `${prefix}menu`, 'Claim', `${prefix}claim`)
  }
}
handler.help = ['dompet', 'atm']
handler.tags = ['rpg']
handler.command = /^(dompet|atm|pp|profile|profil|propil)$/i
handler.register = false
module.exports = handler


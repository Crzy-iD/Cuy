let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  males: 'https://malesin.xyz',
  dhamz: 'https://api.dhamzxploit.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  malesin: 'https://malesin.xyz',
  caliph: 'https://caliphapi.com'
  
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu',
  'https://caliphapi.com': 'LAsTZSiP'
}
//global.wm = '𝑨𝒓𝒊𝒆𝑻𝒖𝒃𝒆 𝑩𝒐𝒕'
global.wait = '*Tunggu Sebentar ...*'
global.eror = '*Maaf, Sedang Error*'

//========Url Template Buttons=========//
global.dtu = 'KennGroup'
global.urlnya = "https://chat.whatsapp.com/I936MlAcaKt9exRqdbVK2o"

//============= callButtons =============//
global.dtc = 'Owner Number'
global.phn = '6281238142144'

//============= Games ================//
global.benar = '_*Benar*_✅'
global.salah = '_*Salah*_❌'
global.dikit = "_*Dikit Lagi*_"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬 ',
      limit: '🌌 ',
      healt: '❤️ ',
      exp: '✉ ️',
      money: '💵 ',
      potion: '🥤',
      diamond: '💎 ',
      common: '📦 ',
      uncommon: '🎁 ',
      mythic: '🗳 ️',
      legendary: '🗃 ️',
      pet: '🎁 ',
      sampah: '🗑 ',
      armor: '🥼 ',
      fishingrod: '🎣 ',
      pickaxe: '⛏ ️',
      sword: '⚔ ️',
      kayu: '🪵 ',
      batu: '🪨 ',
      iron: '⛓ ️',
      string: '🕸 ️',
      kuda: '🐎 ',
      kucing: '🐈 ',
      anjing: '🐕 ',
      makananpet: '🍖 ',
      gold: '👑 ',
      emerald: '💚 '
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

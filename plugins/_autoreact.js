let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["🗿", "😂"])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(pepek|memek|kontol|kntl|anjg|ajg|ajng|ppk|mmk|pantek|laso|dick|pussy|nigga|idiot|nigger|nibba)/i
handler.command = new RegExp

module.exports = handler
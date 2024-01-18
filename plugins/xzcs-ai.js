import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text[0]) throw 'soalnya nya mana'
  await m.reply('Searching...')
	axios.get(`https://skizo.tech/api/bard-ai?text=${text}&apikey=yangtze`).then ((res) => {
	 	let hasil = `${res.content}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = handler.tags = ['ai']
handler.command = /^(ai)$/i

handler.exp = 0
handler.limit = true

export default handler
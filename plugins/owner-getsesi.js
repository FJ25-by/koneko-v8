import fs from 'fs'
let handler = async (m, { conn, text }) => {
m.reply('Tunggu Sebentar, Sedang Mengambil Sesi Bot')
let sesi = await fs.readFileSync('./KonekoSessions/creds.json')
return await conn.sendMessage(m.sender, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i
handler.rowner = true
export default handler
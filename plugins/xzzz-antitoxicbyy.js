let handler = async (m, { conn }) => {
   global.db.data.users[m.sender].limit -= 10
    global.db.data.users[m.sender].exp -= 0
    m.reply('TOXIC? -10 LIMIT')
}
handler.customPrefix = /^(anj|anjing|bangsat|bgst|b4ngsat|b4n9s4t|b9st|bangs4t|4nj|tai|t4i|t4¡|titit|t¡tit|t¡t¡t|kontol|kntl|k0ntol|k0nt0l|kontoL|mmk|memk|memek|m3m3k|pukimak|puk¡mak|puk¡m4k|asu|4su|a5u)$/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler
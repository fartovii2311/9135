//code made by wildovsky +79963107770
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `❗ Введите число, представляющее количество дней!\n\n📌 Пример :\n*${usedPrefix + command}* 30`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]
    let readMore = '';
    for (let i = 0; i < 4001; i++) {
      readMore += String.fromCharCode(8206);
    }
    var nDays = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += nDays
    else global.db.data.chats[who].expired = now + nDays
    let teks = `✅ *Успешно* ${readMore} 
    ${args[0]} Дней`
    conn.reply(m.chat, teks, m)
}
handler.help = ['expired <Дней>']
handler.tags = ['owner']
handler.command = /^(аренда|addexpired)$/i
handler.rowner = true
export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Дней*\n ', h, ' *Часов*\n ', m, ' *Минут*\n ', s, ' *Секунд* '].map(v => v.toString().padStart(2, 0)).join('')
}


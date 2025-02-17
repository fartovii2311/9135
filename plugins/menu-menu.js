import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*◈ ${user.registered === true ? user.name : `👉 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '_Хозяин🕴️_*@⁨Артём⁩*' : 'verify name.age'}`} ◈*
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*˚₊·˚₊· ͟͟͞͞➳❥* ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n*˚₊·˚₊· ͟͟͞͞➳❥* ANUBIS⇢ *@${global.conn.user.jid.split`@`[0]}*`}
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│* Вызвал меню
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal1()}_ ◂◂*
——————————————

_Бот🤖_     *𓋹 ANUBIS 𓋹 *

*ВЕРСИЯ ПРОШИВКИ*
              *1.4.0 ㎇*
——————————————
           *𓆣 МЕНЮ 𓆣*
——————————————
𓆃 *Вызов*
𓆃 *Внимание*
𓆃 *Молчуны*
𓆃 *Группу открыть/закрыть*
𓆃 *Включить/Выключить приветствие*
𓆃 *Включить/Выключить антиссылка*
𓆃 *Ссылка*
𓆃 *Снести*
𓆃 *Новаяссылка*
𓆃 *Включить/Выключить антиссылка2*
𓆃 *Включить/Выключить приветствие*
𓆃 *Включить/Выключить аудио*
——————————————
     *𓂀Для хозяина𓂀*
——————————————
𓆙 *Включить/Выключить ограничить*
𓆙 *Аренда*
𓆙 *СбросАренды*
𓆙 *ЧекАренды*
 `.trim()
    
const vi = ['/media/menus/менюю.jpg',
'/media/menus/менюю.jpg',
'/media/menus/менюю.jpg']
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, contextInfo: fakeChannel2 })
//await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'менюю.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(меню|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363169294281316@newsletter',
newsletterName: "GB - UPDATE ✨",
serverMessageId: -1
},
forwardingScore: 999,
externalAdReply: {
title: gt,
body: wm,
thumbnailUrl: img2,
sourceUrl: md,
mediaType: 1,
renderLargerThumbnail: false
}}})*/

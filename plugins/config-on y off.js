let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|включить|(turn)?Включить|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'ограничить': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
		
case 'приветствие': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
		
case 'detect': case 'avisos': case 'autodetectar':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'антиссылка': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'антиссылка2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'антитт': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'антиютуб': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'антителеграм': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'антифейсбук': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'антиинстаграмм': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'антитвитер': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
		
case 'jadibotmd': case 'modejadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = !isEnable
break 
		
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
		
case 'anticall': case 'antillamar': case 'antillamada':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'толькоадмин': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
		
case 'интиудаление': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
		
case 'реакция': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
default:
if (!/[01]/.test(command)) return m.reply(`
${lenguajeGB.smsConfi1bot()}\n

${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antienlace' : 'antilink'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antienlace2' : 'antilink2'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *аннтиТТ*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *антиютуб*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *антителеграм*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *антифейсбуб*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *антиинстаграм*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *антитвитер*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antinternacional' : 'antifake'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'restringir' : 'restrict'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'publico' : 'public'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.jadibotmd ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'modoserbot' : 'modejadibot'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiprivado ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antiprivado' : 'antiprivate'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antillamar' : 'anticall'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'autovisto' : 'autoread'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'modoadmin' : 'modeadmin'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '❌' : '✅' : '🌻'}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antieliminar' : 'antidelete'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : '🌻'}`}
🌸 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'antiver' : 'antiviewonce'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : '🌻'}`}
🌼 \`\`\`${usedPrefix}Включить/Выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'reaccion' : 'reaction'}*`.trim())
return false
}
m.reply(`${lenguajeGB['smsAvisoEG']()}*⭔ ${lenguajeGB.smsConfi2bot()}:* _${type}_
*⭔ ${lenguajeGB.smsConfi3bot()}:* _${isEnable ? lenguajeGB.smsConfi5bot() : lenguajeGB.smsConfi6bot()}_
*⭔ ${lenguajeGB.smsConfi4bot()}:* ${isAll ? packname : isUser ? '' : '_' + lenguajeGB.smsConfi7bot() + '_'}`)
}
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

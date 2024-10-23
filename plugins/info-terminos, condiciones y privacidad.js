try {
    if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
    } catch (e) {
    console.log(m, m.quoted, e)
    }
    let settingsREAD = global.db.data.settings[this.user.jid] || {}  
    if (opts['autoread']) await this.readMessages([m.key])
    if (settingsREAD.autoread2) await this.readMessages([m.key])  
    if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
            
    if (db.data.chats[m.chat].reaction && m.text.match(/(привет)/gi)) {
    let emot = pickRandom(["😍"])
    if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
    }
    function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
    

    try {
        if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
        console.log(m, m.quoted, e)
        }
        let settingsREAD1 = global.db.data.settings[this.user.jid] || {}  
        if (opts['autoread']) await this.readMessages([m.key])
        if (settingsREAD.autoread2) await this.readMessages([m.key])  
        if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
                
        if (db.data.chats[m.chat].reaction && m.text.match(/(как дела)/gi)) {
        let emot = pickRandom(["😍"])
        if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
        }
        function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
        

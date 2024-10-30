function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *дней*\n ', h, ' *часов*\n ', m, ' *минут*\n ', s, ' *секунд* '].map(v => v.toString().padStart(2, 0)).join('')
}

let handler = async (m, { conn }) => {
  let rents = [];
  let aboutToExpire = [];
  for (let chat in global.db.data.chats) {
      let expired = global.db.data.chats[chat].expired;
      if (expired > Date.now()) {
          let daysLeft = Math.floor((expired - Date.now()) / 86400000);
          if (daysLeft === 3) { // Изменено значение на 3
              aboutToExpire.push(await conn.getName(chat));
          }
          rents.push({
              group: await conn.getName(chat),
              expired: new Date(expired),
              daysLeft: msToDate(expired - Date.now())
          });
      }
  }

  if (rents.length === 0) {
      return conn.reply(m.chat, '🚫 Нет активных аренд', m);
  }

  let message = `📋 *Активные аренды (${rents.length} шт):*\n\n`;
  for (let rent of rents) {
      let d = rent.expired;
      let locale = 'ru';
      let date = d.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      });
      let time = d.toLocaleTimeString(locale, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
      });
      message += `👥 *Группа:* ${rent.group}\n⏳ *Осталось:* ${rent.daysLeft}\n🕰️ *Дата истечения:* ${date} ${time}\n\n`;
  }

  conn.reply(m.chat, message, m);

  if (aboutToExpire.length > 0) {
      let alertMessage = `🚨 *Предупреждение: Срок аренды бота заканчивается через 3 дня в следующих группах:*\n\n`; // Изменено сообщение
      for (let group of aboutToExpire) {
          alertMessage += `*Группа:* ${group}\n\n`;
      }
      conn.reply(m.chat, alertMessage, m);
  }
}

handler.help = ['checkrents']
handler.tags = ['owner']
handler.command = /^(чекАренд)$/i
handler.rowner = true

export default handler;

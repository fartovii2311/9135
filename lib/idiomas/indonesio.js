const lenguaje = () => { return 'id' } //Bahasa Indonesia 

const smsAvisoRG = () => { return `╰⊱✅⊱ *результат* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ОСЛАБЛЕНИЕ* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *инфо* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ошибка* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *НЕПРАВИЛЬНОЕ ДЕЙСТВИЕ* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *ПРЕДУПРЕЖДЕНИЕ* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *УКОМПЛЕКТОВАННЫЙ* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ ИСПОЛЬЗОВАТЬСЯ ТОЛЬКО ОСНОВНЫМ НОМЕРОМ БОТА\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОГ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОЙ СОЗДАТЕЛЬ!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОГУТ ИСПОЛЬЗОВАТЬ ТОЛЬКО СОЗДАТЕЛИ И МОДЕРАТОРЫ!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ДЛЯ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ И МОЙ СОЗДАТЕЛЬ !! Чтобы получить премиум, купите пропуск с помощью команды # Pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ГРУППАХ!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ БЫТЬ ИСПОЛЬЗОВАНА ТОЛЬКО В ЧАСТНОМ ПОРЯДКЕ!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡ВЫ ДОЛЖНЫ БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ИМЕТЬ ВОЗМОЖНОСТЬ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡Вы должны быть зарегистрированы, чтобы использовать эту команду, напишите #verify, чтобы зарегистрироваться!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰*@тема *⊰┈ ✦*\n*┊✨ ДОБРО ПОЖАЛОВАТЬ/A!!*\n┊💖 @user\n┊📄 *ПРОЧИТАЙТЕ ОПИСАНИЕ ГРУППЫO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *ОН НЕ БЫЛ ДОСТОИН БЫТЬ ЗДЕСЬ!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return `*@userЕГО ПОВЫСИЛИ ДО АДМИНИСТРАТОРА!!*`}
const smsSdemote = () => { return `*@user ОН БЫЛ ПОНИЖЕН В ДОЛЖНОСТИ АДМИНИСТРАТОРА!!*`}
const smsSdesc = () => { return '*ПРОЧИТАЙТЕ НОВОЕ ОПИСАНИЕ ГРУППЫ:*\n\n@desc'}
const smsSsubject = () => { return `*НАЗВАНИЕ ГРУППЫ БЫЛО ОБНОВЛЕНО!!*\n@субъектt`}
const smsSicon = () => { return `* ФОТОГРАФИЯ группы БЫЛА ОБНОВЛЕНА!!*`}
const smsSrevoke = () => { return '*ПРОВЕРЬТЕ ССЫЛКУ НА НОВУЮ ГРУППУ!!*\n*@revoke*'}

const methodCode1 = () => { return `МЕТОД ПРИВЯЗКИ` }
const methodCode2 = () => { return ` КАК ВЫ ХОТИТЕ ПОДКЛЮЧИТЬСЯ?` }
const methodCode3 = () => { return ` Опцион` }
const methodCode4 = () => { return ` QR код` }
const methodCode5 = () => { return ` 8-значный код.` }
const methodCode6 = () => { return ` Напишите только номер` }
const methodCode7 = () => { return ` возможность подключения.` }
const methodCode8 = () => { return ` СОВЕТ` }
const methodCode9 = () => { return ` Используйте Termux, Replit, Linux или Windows` }
const methodCode10 = () => { return ` используйте эти команды для прямого выполнения:` }
const methodCode11 = (chalk) => { return ` НОМЕРА, КРОМЕ НЕ ДОПУСКАЮТСЯ ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, НЕТ СПЕЦИАЛЬНЫХ БУКВ ИЛИ СИМВОЛОВ.\n${chalk.bold.yellowBright(" КОНЧИК: СКОПИРУЙТЕ НОМЕР ОПЦИИ И ВСТАВЬТЕ В КОНСОЛЬ.")}` }
const methodCode12 = () => { return ` Начните с QR-кода` }
const methodCode13 = () => { return ` Начните с 8-значного кода` }
const methodCode14 = () => { return ` Запуск по умолчанию с опциейi` }
const phNumber = (chalk) => { return `Установить файл${chalk.bold.greenBright("config.js")} Введенный номер не имеет кода страны.${chalk.bold.yellowBright("Пример: +593090909090")}` }
const phNumber2 = (chalk) => { return ` Введите номер WhatsApp.\n${chalk.bold.yellowBright(" Совет: скопируйте номер WhatsApp и вставьте его в консоль.")}\n${chalk.bold.yellowBright(" пример: +593090909090")}\n${chalk.bold.magentaBright('---> ')}` }
const phNumber3 = () => { return ` Обязательно добавьте код страны.` }
const pairingCode = () => { return ` CODICE VINCOLANTE:` }

const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 СОЕДИНЕНИЕ С WHATSAPP УСПЕШНО 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ ЗАГРУЗКА ...\n`} 
const smsCodigoQR = () => { return `\n✅СКАНИРОВАТЬ QR-КОД ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД  ✅`}
const smsConexionOFF = () => { return `\n⚠️ НЕТ ПОДКЛЮЧЕНИЯ, УДАЛИТЬ ПАПКУ  ${global.authFile} И ОТСКАНИРУЙТЕ QR-КОД  ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ МУЛЬТИМЕДИЙНЫЙ ☘️\n┆• FILE DALLA CARTELLA TMP ELIMINATI \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• НЕСУЩЕСТВЕННЫЕ СЕАНСЫ УДАЛЕНЫ \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 файл🌹\n┆• ОСТАТОЧНЫЕ ФАЙЛЫ CANCEL \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺Гатаджадибо 🌺\n┆•НЕЧЕГО УДАЛЯТЬ \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼  🌼\n┆• УДАЛЕННЫЕ НЕСУЩЕСТВЕННЫЕ ФАЙЛЫ \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️Гатаджадибо ⚠️\n┆• ПРОИЗОШЛА ОШИБКА \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ АРХИВ ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `УСПЕШНО УДАЛЕН \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ архив ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `НЕ УДАЛОСЬ УДАЛИТЬ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`}
const smsConexioncerrar = () => { return `\n⚠️ СОЕДИНЕНИЕ ЗАКРЫТО, ПОВТОРНОЕ СОЕДИНЕНИЕ ....`}
const smsConexionperdida = () => { return `\n⚠️ ПОТЕРЯННОЕ СОЕДИНЕНИЕ С СЕРВЕРОМ, ПЕРЕПОДКЛЮЧЕНИЕ...`}
const smsConexionreem = () => { return `\n⚠️ СОЕДИНЕНИЕ ЗАМЕНЕНО, ЕЩЕ ОДИН НОВЫЙ СЕАНС БЫЛ ОТКРЫТ, ЗАКРОЙТЕ ТЕКУЩИЙ СЕАНС ПЕРВЫМE.`}
const smsConexionreinicio = () => { return `\n❇️ПОДКЛЮЧЕНИЕ К СЕРВЕРУ ВЫПОЛНЯЕТСЯ...`}
const smsConexiontiem = () => { return `\n⌛ ТАЙМ-АУТ СОЕДИНЕНИЯ, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ ПРОИСХОДИТ...`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗НЕИЗВЕСТНАЯ ПРИЧИНА ОТКЛЮЧЕНИЯ : ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ Язык уже настроен.`} 
const languageRegister = (selectedLanguage) => { return `❇️ Язык был установлен в"${selectedLanguage}".\n`} 
const smsMainBot = () => { return "Обновлено ' main.js ' успешно"}

//_antiprivado 
const smsprivado = () => { return `*Присоединяйтесь к официальной группе бота, чтобы использовать его*\n\n*Присоединяйтесь к официальной группе бота, чтобы использовать его*`}

//Boton
const smsConMenu = () => { return `🌻 меню`}

//info-creadora.js
const smsCreA = () => { return 'Привет!!'}
const smsCreB = () => { return 'Меня зовут'}
const smsCreC = () => { return 'Всегда доступен, чтобы помочь вам 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜ОФИЦИАЛЬНЫЕ АККАУНТЫ◞* 🌸'}
const smsOfc2 = () => { return `*❥_следуйте за нами в официальных аккаунтах, чтобы оставаться в курсе событий_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼Вы принимаете добровольную поддержку через PayPal, Если вы хотите помочь другим способом, вы можете пожертвовать номер в Instagram, чтобы репозиторий оставался действительным, спасибо!!\n\n🌺Вы всегда можете поддержать, подписавшись на официальные аккаунты и поделившись работой, выполненной в ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ ДОБРОВОЛЬНОЕ ПОЖЕРТВОВАНИЕ ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Вы также можете поделиться следующим в качестве демонстрации поддержки_*\n* _оцените репозиторий с помощью 🌟 спасибо!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 ОФИЦИАЛЬНЫЕ ГРУППЫ 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 СОТРУДНИЧЕСТВО🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_* ВЫ В ЭТИХ ГРУППАХ:*_'}
const smsLisB = () => { return '*⭔Всего Групп:*'}
const smsLisC = () => { return '*⋄ группы:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄Участники:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨С У П П О Р Т О'}
const smsEstado1 = () => { return 'СТАТО'}
const smsEstado2 = () => { return 'версия'}
const smsEstado3 = () => { return 'Утенти'}
const smsEstado4 = () => { return 'Регистрация'}
const smsEstado5 = () => { return 'Определение размеров чата'}
const smsEstado6 = () => { return 'Запрещенные пользователи'}
const smsEstado7 = () => { return 'Активный во время'}

//info-ping.js
const smsVl1 = () => { return `СКОРОСТИ'`}
const smsVl2 = () => { return 'сервер*'}
const smsVl3 = () => { return '*🔵Свободная оперативная память:*'}
const smsVl4 = () => { return '*💻 платформа :*'}
const smsVl5 = () => { return '*📡 Место:*'}
const smsVl6 = () => { return '*Использование памяти NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'СОЗДАТЕЛЬ'}
const smsBT2 = () => { return  'версия'}
const smsBT3 = () => { return 'ПРЕФИКС'}
const smsBT4 = () => { return 'ПРИВАТНЫЙ ЧАТ'}
const smsBT5 = () => { return 'группы'}
const smsBT6 = () => { return 'ОБЩИЙ ЧАТ'}
const smsBT7 = () => { return `АКТИВНОСТЬ'`}
const smsBT8 = () => { return 'УТЕНТИ'}
const smsBT9 = () => { return 'ВСПОМОГАТЕЛЬНЫЙ БОТ ATTIVI'}
const smsCreInfo = () => { return '🌟 информация'}


//info-contacto.js
const smsContacto1 = () => { return 'Я' + packname + ' бот WhatsApp, посвященный тому, чтобы помочь вам с тем, что вам нужно 😎'}
const smsContacto2 = () => { return 'Я владелец ' + packname + ' если у вас есть какие-либо вопросы, вы можете сказать мне✌️'}
const smsContacto3 = () => { return '👑Владелец'}
const smsContacto4 = () => { return 'Официальный Контакт GataBot 🐈'}
const smsContacto5 = () => { return '🐣Чем я могу вам помочь?'}
const smsContacto6 = () => { return 'У меня нет электронной почты 🙏'}
const smsContacto7 = () => { return '🌎 Глобальный'}
const smsContacto8 = () => { return `Эта учетная запись-бот  👀`}

//ejemplos
const smsMalused = () => { return '⚡ *ИСПОЛЬЗУЙТЕ КОМАНДУ СЛЕДУЮЩИМ ОБРАЗОМ:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *НЕОБХОДИМО ИСПОЛЬЗОВАТЬ КОМАНДУ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ОТВЕТЬТЕ НА СООБЩЕНИЕ С ПОМОЩЬЮ КОМАНДЫ ИЛИ ИСПОЛЬЗУЙТЕ ЭТОТ ПРИМЕР:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`У МЕНЯ ВОЗНИКЛИ НЕУДОБСТВА.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`что то пошло не так, сообщите эту команду, используя:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'НАЗВАНИЕ'}
const smsYT2 = () => { return 'ОПИСАНИЕ'}
const smsYT3 = () => { return 'ПРОДОЛЖИТЕЛЬНОСТЬ'}
const smsYT4 = () => { return 'ВИЗУАЛИЗАЦИИ'}
const smsYT5 = () => { return 'СМОТРЕТЬ НА YOUTUBE'}
const smsYT6 = () => { return 'ПОПРОБУЙТЕ ДРУГОЕ ИМЯ'}

//descargas.js
const smsYTA1 = () => { return `СКАЧАТЬ АУДИО... ПОДОЖДИ МИНУТКУ`}

//descargas.js
const smsYTV1 = () => { return 'СКАЧАТЬ видео... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsYTA2 = () => { return 'ЗАГРУЗКА АУДИОФАЙЛА... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsYTV2 = () => { return 'ЗАГРУЗКА видео... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsTiktok = () => { return 'СКОРО У ВАС БУДЕТ TIKTOK'}

//descargas.js
const smsGit = () => { return `Отправка файлов, момент🚀\nесли не отправить файл, это потому, что он тяжелый`}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`ЗАПРЕЩЕНО СКРЫВАТЬ ВИДЕО\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`ЗАПРЕЩЕНО СКРЫВАТЬ ФОТОГРАФИИ\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*ЗАДАЙТЕ ВОПРОС, ПРИМЕР:*'} 
const smsOpenai2 = () => { return 'Порекомендуйте мне 10 лучших боевиков'} 
const smsOpenai3 = () => { return  `объясните, что такое квантовое уравнение, и запустите простой и сложный пример.`} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА СТИКЕР, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ИЗОБРАЖЕНИЕ*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА ИЗОБРАЖЕНИЕ, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ССЫЛКУ*'} 
const smsConURL1 = () => { return '🔗 *ссылка*'} 
const smsConURL2 = () => { return '⚖️ *РАЗМЕР*'} 
const smsConURL3 = () => { return '♻️ *ИСТЕЧЕНИЕ*'} 
const smsConURL4 = () => { return '🪄 *КОРОТКАЯ ССЫЛКА*'}
const smsConURLERR1 = () => { return 'КОРОТКАЯ ССЫЛКА'} 
const smsConURLERR2 = () => { return 'Сконосциуто'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА АНИМИРОВАННЫЙ СТИКЕР, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ВИДЕО*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*ПРОСТО АНИМИРОВАННЫЙ СТИКЕР, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ВИДЕО*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ ВОТ ВАШЕ ВИДЕО!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА GIF, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ВИДЕО*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + `*ОТВЕТЬТЕ НА ВИДЕО. ИСПОЛЬЗУЕМЫЙ ТИП ФАЙЛА НЕВЕРЕН*`} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + `*GIF со звуком (откройте gif для прослушивания звука)*`} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА ВИДЕО ИЛИ АУДИО, ЧТОБЫ ПРЕОБРАЗОВАТЬ ЕГО В ГОЛОСОВУЮ ЗАМЕТКУ*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ЧТО - ТО НЕ ТАК С ВИДЕО, ПОПРОБУЙТЕ ЕЩЕ РАЗ*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + `*ЧТО-ТО НЕ ТАК СО ЗВУКОМ, ПОПРОБУЙТЕ ЕЩЕ РАЗ*`} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + `*ЧТО-ТО ПОШЛО НЕ ТАК, КОГДА ТЫ ПЫТАЛСЯ ПРЕОБРАЗОВАТЬ СВОЙ ЗВУК В ГОЛОСОВУЮ ЗАМЕТКУ.*`}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + `*ЧТО-ТО ПОШЛО НЕ ТАК, КОГДА ТЫ ПЫТАЛСЯ ПРЕОБРАЗОВАТЬ СВОЕ ВИДЕО В ГОЛОСОВУЮ ЗАМЕТКУ. *`} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '* ОТВЕТЬТЕ НА ТЕКСТОВОЕ СООБЩЕНИЕ ИЛИ ВВЕДИТЕ КОД И ТЕКСТ ДЛЯ ПРЕОБРАЗОВАНИЯ В АУДИО, НАПРИМЕР:*\n'}
const smsTradc2 = () => { return ' (code) (text)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + `Этот текст будет преобразован в аудио \n\n`}
const smsTradc4 = () => { return '*ВЫ МОЖЕТЕ ПОЛУЧИТЬ КОД ПОДДЕРЖИВАЕМЫХ ЯЗЫКОВ НА:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️Подожди минутку, пожалуйста...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_БОЛЕЕ 150 МГ НЕ МОГУТ БЫТЬ ОТПРАВЛЕНЫ_*'}
const smsImageGg = () => { return '*💞 БОЛЕЕ 150 МГ НЕ МОГУТ БЫТЬ ОТПРАВЛЕНЫ_*'}

const smsGI1 = () => { return '*ИНФОРМАЦИЯ О ГРУППЕ*'}
const smsGI2 = () => { return '*ИДЕНТИФИКАТОР ГРУППЫ*'}
const smsGI3 = () => { return '* НАЗВАНИЕ ГРУППЫ*'}
const smsGI4 = () => { return '* ОПИСАНИЕ ГРУППЫ*'}
const smsGI5 = () => { return '*НЕТ ОПИСАНИЯ*'}
const smsGI6 = () => { return '*ВСЕГО УЧАСТНИКОВ*'}
const smsGI7 = () => { return '*УЧАСТНИКИ*'}
const smsGI8 = () => { return '*владелец группы*'}
const smsGI9 = () => { return '*админы группы*'}

//grupos.js
const smsAddB3 = () => { return `*УВЕДОМЛЕНИЕ ДЛЯ АДМИНИСТРАТОРОВ*`}
const smsAddB4 = () => { return `*АДМИНИСТРАТИВНОЕ ПРИСУТСТВИЕ*`}
const smsAddB5 = () => { return `*СООБЩЕНИЕ:*`}
const smsAddB6 = () => { return `Я прошу администраторов, пожалуйста.`}

//grupos-admins.js
const smsDemott = () => { return `*НОМЕР НЕДЕЙСТВИТЕЛЕН, ПОПРОБУЙТЕ ЕЩЕ РАЗ ОТВЕТИТЬ НА ЧЬЕ-ТО СООБЩЕНИЕ ИЛИ ИСПОЛЬЗОВАТЬ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}
const smsDemott2 = () => { return '*ТЕПЕРЬ У НЕГО ЕСТЬ СИЛА В ГРУППЕ!!*'}
const smsDemott3 = () => { return '*ТЕПЕРЬ У НЕГО нет СИЛы В ГРУППЕ!!*!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*ОН БЫЛ УСТАНОВЛЕН НА ПРИВЕТСТВИЕ ГРУППЫ*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ"@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (упоминание пользователя)*\n*⚡@subject (название группы)*\n*⚡ @desc (описание группы)*\n\n*ПОМНИТЕ, ЧТО " @ " НЕОБЯЗАТЕЛЬНО*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*Прощание группы было настроено*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ПИШИТЕ ПРОЩАЛЬНОЕ СООБЩЕНИЕ_*\n*_ДОПОЛНИТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ"@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡@user (упоминание пользователя)*\n\n*ПОМНИТЕ, ЧТО " @ " НЕ ЯВЛЯЕТСЯ ОБЯЗАТЕЛЬНЫМ*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}* ОПИСАНИЕ ГРУППЫ НАСТРОЕНО*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*IL НАЗВАНИЕ ГРУППЫ БЫЛО УСТАНОВЛЕНО*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ВВЕДИТЕ НОВОЕ ИМЯ ГРУППЫO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*ИМЯ ГРУППЫ НЕ ДОЛЖНО СОДЕРЖАТЬ БОЛЕЕ 25 СИМВОЛОВ*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ, ЧТОБЫ ИЗМЕНИТЬ ГРУППОВОЕ ФОТО*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 Изображение группы было обновлено!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*ССЫЛКА НА ГРУППУ БЫЛА ВОССТАНОВЛЕНА*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*Отметьте человека или ответьте на сообщение человека, которого вы хотите удалить*\n \ n*пример:* `}
const smskick2 = () => { return `УДАЛЕННЫЙ😼`}
const smskick3 = () => { return `Я НЕ МОГУ УДАЛИТЬ СОЗДАТЕЛЯ GRUPPO 😆🫵`}
const smskick4 = () => { return `НЕ В ЭТОЙ ГРУППЕ👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*КАЖДЫЙ МОЖЕТ НАПИСАТЬ СЕЙЧАС!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}* ГРУППА ЗАКРЫТА, ТОЛЬКО АДМИНИСТРАТОРЫ МОГУТ ПИСАТЬ!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ СОЗЫВ ГРУППЫ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ID*`}
const smsInsGC2 = () => { return `*имя*`}
const smsInsGC3 = () => { return `*СОЗДАННЫЙ*`}
const smsInsGC4 = () => { return `*ГЛАВНОЕ УПРАВЛЕНИЕ*`}
const smsInsGC5 = () => { return `*ОПИСАНИЕ*`}

//propietario(a.jsОТПРАВКА РЕЗЕРВНЫХ КОПИЙ В ЧАСТНОМ ПОРЯДКЕ..
const smsResP1 = () => { return `_*🗂️ INVIO BACKUP IN PRIVATO...*_`}
const smsResP2 = (date) => { return `*🗓️База данных:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ПОМЕТЬТЕ КОГО - НИБУДЬ ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ НАПИШИТЕ НОМЕР, НА КОТОРЫЙ ВЫ ХОТИТЕ ЗАПРЕТИТЬ КОМАНДЫI*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot}НЕ МОЖЕТ БЫТЬ ЗАПРЕЩЕН С ПОМОЩЬЮ ЭТОЙ КОМАНДЫ* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *Я НЕ МОГУ ЗАПРЕТИТЬ ВЛАДЕЛЬЦУ @${ownerNumber} OF ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*НЕТ НЕОБХОДИМОСТИ СНОВА ЗАПРЕЩАТЬE @${number} GIA LO E'* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*УСПЕШНО ЗАБЛОКИРОВАН ПОЛЬЗОВАТЕЛЬ* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number}ТЫ ЗАБАНЕН@${usr} ВЫ НЕ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА КТО-ТО НЕ ОТМЕНИТ ЗАПРЕТ* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*Произошла ошибка, может быть, пользователя нет в моей базе данных попробуйте написать ${usedPrefix + command} ${number}*\n\`\`\`Если ошибка продолжается вернуть эту команду\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ПОМЕТЬТЕ КОГО - НИБУДЬ ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ НАПИШИТЕ НОМЕР, КОТОРЫЙ ВЫ ХОТИТЕ ВЫВЕСТИ ИЗ КОМАНД*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*Нет необходимости бормотать снова @${number} GIA' LO E'* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*УСПЕШНО СБИТЫЙ ПОЛЬЗОВАТЕЛЬ* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number}ТЫ БЫЛ ЗАБАНЕН @${usr} ТЕПЕРЬ ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*Произошла ошибка, может быть, пользователя нет в моей базе данных ${usedPrefix + command} ${number}*\n\`\`\`Если ошибка продолжается вернуть эту команду\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return `*SEI GIA' админ😳🌹*`}
const smsAutoAdmin2 = () => { return `*Я НЕ МОГУ СДЕЛАТЬ ЭТО АДМИНИСТРАТОР 🥹🥀*`}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + `🗂️ * ЭТОТ ЧАТ НЕ ЗАРЕГИСТРИРОВАН В БАЗЕ ДАННЫХ*`}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + `🌹 * ЭТОТ ЧАТ НЕ ЗАПРЕЩЕН!!*`}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + `🪄 * ЭТОТ ЧАТ БЫЛ открыть, ТЕПЕРЬ ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ!!*`}

//propietario(a).js
const smsBioEd1 = () => { return `*SCRIVI IL TESTO CHE VUOI VISUALIZZARE NELLA BIO DI* ${packname}`}
const smsBioEd2 = () => { return `*БИОГРАФИЯ ОЧЕНЬ ДОЛГО, ОБОБЩИТЬ ИНФОРМАЦИЮ, ПОЖАЛУЙСТА*`}
const smsBioEd3 = () => { return '✅ `"УСПЕШНО ОТРЕДАКТИРОВАННАЯ ИНФОРМАЦИЯ О БОТЕ"``'}

//propietario(a).js
const smsNameEd1 = () => { return `*НАПИШИТЕ ТЕКСТ, КОТОРЫЙ ВЫ ХОТИТЕ ОТОБРАЗИТЬ В КАЧЕСТВЕ ИМЕНИ ПОЛЬЗОВАТЕЛЯ* ${packname}`}
const smsNameEd2 = () => { return `** ИМЯ СЛИШКОМ ДОЛГО, ОБОБЩИТЬ ИНФОРМАЦИЮ, ПОЖАЛУЙСТА*`}
const smsNameEd3 = () => { return '✅ ``"ИМЯ БОТА БЫЛО ИЗМЕНЕНО ТАК СЛУЧИЛОСЬ```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `* ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ С ПОМОЩЬЮ КОМАНДЫ ${usedPrefix + command} ЧТОБЫ ОБНОВИТЬ ФОТОГРАФИЮ ПРОФИЛЯ БОТА*`}
const smsFotoEd2 = () => { return '✅ ```УСПЕШНО ОТРЕДАКТИРОВАННАЯ ФОТОГРАФИЯ ПРОФИЛЯ БОТА``'}
const smsFotoEd3 = (usedPrefix, command) => { return `*НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ С ПОМОЩЬЮ КОМАНДЫ ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return `✅ *ЭТОТ ЧАТ БЫЛ ЗАБЛОКИРОВАН, ВЫ НЕ СМОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА ВЫ НЕ ИСПОРТИТЕ ЕГО СНОВА*'}Ю КОМАНДЫ `}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*НЕ МОГУ ${comd}ВЛАДЕЛЬЦУ  @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) =>  { return lenguajeGB.smsAvisoAG() + `*это было $`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + `*Пометьте пользователя, напишите его номер или ответьте на сообщение, чтобы перезапустить его данные*`}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + `* ВВЕДЕННЫЙ НОМЕР НЕДЕЙСТВИТЕЛЕН ДЛЯ СБРОСА ДАННЫХ*`}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `* СБРОСИТЬ ДО@${number} ИЗ БАЗЫ ДАННЫХ*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n*пример:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packna ` ✨ *минимум 10 символов для выполнения сигнализации*`} ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*НАПИСАТЬ ОТЧЕТ*\n*пример:*\n\n*${usedPrefix + command}* _Команда ${usedPrefix}play не работает._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *МИНИМУМ 10 СИМВОЛОВ ДЛЯ СОЗДАНИЯ ОТЧЕТА*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *МАКСИМУМ 1000 СИМВОЛОВ ДЛЯ ВЫПОЛНЕНИЯ СИГНАЛИЗАЦИИ*`}
const smsRepСИГНАЛИЗАЦИЯortGB4 = (urs, text) => { return `
💌 \`\`\`SEGNALAZIONE\`\`\` 💌
*⎔ номер:*
*» Wa.me/${urs}*

*⎔ ПОЛЬЗОВАТЕЛЬ:*
*» @${urs}*

*⎔ СООБЩЕНИЕ:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `* ОТЧЕТ БЫЛ ОТПРАВЛЕН РАЗРАБОТЧИКАМ, ПРИ НЕОБХОДИМОСТИ ВЫ ПОЛУЧИТЕ ОТВЕТ*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*ВВЕДИТЕ ИМЯ ПОЛЬЗОВАТЕЛЯ GITHUB*\n*пример*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*R I C E R C A... 🔎*'}
const smsGit3 = () => { return '🌻 *Имя пользователя*'}
const smsGit4 = () => { return '🌼 *био*'}
const smsGit5 = () => { return '🌸 *компания*'}
const smsGit6 = () => { return '🌺 *EMAIL*'}
const smsGit7 = () => { return '🪷 *Блог*'}
const smsGit8 = () => { return '🌹 * ОБЩЕСТВЕННЫЕ ХРАНИЛИЩА*'}
const smsGit9 = () => { return '🌷 *ELEMENTI PUBBLICI ESSENZIALI*'}
const smsGit10 = () => { return '🪸 *последователи*'}
const smsGit11 = () => { return '🍁 *SEGUITI*'}
const smsGit12 = () => { return '☘️ *ПОЗИЦИЯ*'}
const smsGit13 = () => { return '🌱 *ТИПО*'}
const smsGit14 = () => { return 'Не найдено'}

//jadibot-serbot.jsВерсия JadiBot
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ версия JadiBot » _${global.vsJB}_*\n\n🟢 * _ФУНКЦИЯ СУБ-БОТА_*🟢\n\n*➡️С помощью другого мобильного телефона или ПК отсканируйте этот QR-код, чтобы подключить суб-бота*\n\n*1️⃣Перейдите к трем точкам в правом верхнем углу*\n*2️⃣ Перейдите к опции сопряженные устройства*\n*3️⃣Отсканируйте этот QR-код для входа*\n\n📢 *¡Срок действия этого QR-кода истекает через 45 секунд!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*

*ღ ${global.packname} » _${global.vs}_*
*ღ Versione JadiBot » _${global.vsJB}_*

🟢 *_NUOVA ФУНКЦИЯ СТАТЬ СУБ БОТОМ_* 🟢

*1️⃣ Vai ai три точки в правом верхнем углу*
*2️⃣ Vai alопция сопряженные устройства*
*3️⃣ Fare clic по ссылке с кодом телефона* 
*4️⃣ Incolla код ниже*`}
const smsreenvia = () => { return `*🟢Я ОТПРАВЛЯЮ КОМАНДЫ...*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴* ВАШЕ УСТРОЙСТВО ПОДКЛЮЧЕНО*\n\n* Чтобы снова подключиться к использованию:\n#обсуждение`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()} * ЭТА КОМАНДА ОТКЛЮЧЕНА МОИМ ВЛАДЕЛЬЦЕМ*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵*ЧТОБЫ СТАТЬ СУБ-БОТОМ, ПЕРЕЙДИТЕ К ОСНОВНОМУ НОМЕРУ*\n*ღ Введите эту ссылка:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *СОЕДИНЕНИЕ ЗАКРЫТО, МЫ ПОПРОБУЕМ СНОВА ПОДКЛЮЧИТЬСЯ...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴* THELA соединение было закрыто, необходимо вручную подключиться с помощью команды #serbot и повторно сканировать новый QR-код${lenguajeGB['SMS-сообщение является истинным 3']()}* *КОТОРЫЙ БЫЛ ОТПРАВЛЕН В ПЕРВЫЙ РАЗ, КОГДА БЫЛ СДЕЛАН СУБ БОТ*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 * СОЕДИНЕНИЕ УСПЕШНО!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 * СОЕДИНЕНИЕ УСПЕШНО!!! ВЫ МОЖЕТЕ ПОДКЛЮЧИТЬСЯ, ИСПОЛЬЗУЯ:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ * ОН ПОДКЛЮЧЕН!! ПОДОЖДИТЕ ЗАГРУЗКА СООБЩЕНИЙ В ПРОЦЕССЕ...*\n\n♻️* ДОСТУПНЫЕ ОПЦИИ:*\n*» ${usedPrefix}pausesb _(остановить функции суб-бота)_*\n*» ${usedPrefix}delsession _(удалить все следы суб-бота)_*\n*» ${usedPrefix}jadibot _(новый QR-код или логин, если вы уже являетесь суб-ботом)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ В ГЛАВНОМ БОТЕ*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*Мне будет тебя не хватать${global.packname} пока! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ И УДАЛИЛИ ВСЕ ТРЕКИ*`}
const smsFoldErr = (usedPrefix, comd) => { return `*У ВАС НЕТ СЕАНСА, ВЫ МОЖЕТЕ СОЗДАТЬ ЕГО, ИСПОЛЬЗУЯ:*\n*${usedPrefix}${comd}*\n\n*ЕСЛИ У ВАС ЕСТЬ (ID), ВЫ МОЖЕТЕ ПРОПУСТИТЬ ПРЕДЫДУЩИЙ ШАГ, ИСПОЛЬЗУЯ:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*ЕСЛИ ВЫ НЕ СУБ-БОТ, СВЯЖИТЕСЬ С ОСНОВНЫМ НОМЕРОМ, ЧТОБЫ СТАТЬ СУБ-БОТОМ*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*ВЫ ЗАКРЫЛИ / ПРИОСТАНОВИЛИ СЕАНС.*`}

//jadibot
const smsJBCom3 = () => { return `😺* СПИСОК суббот*\n\n🌟_ВЫ МОЖЕТЕ ПОПРОСИТЬ РАЗРЕШЕНИЯ, ЧТОБЫ ВАША ГРУППА ИСПОЛЬЗОВАЛА БОТА_\n\n\`\`\`КАЖДЫЙ ПОЛЬЗОВАТЕЛЬ SUB BOT ИСПОЛЬЗУЕТ ФУНКЦИЮ ПО СВОЕМУ УСМОТРЕНИЮ, ОСНОВНОЙ НОМЕР НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ИСПОЛЬЗОВАНИЕ ФУНКЦИИ\`\`\`\n\nSUBBOT ПОДКЛЮЧЕН:`}
const smsJBCom4 = () => { return "*SUBBOT ПОДКЛЮЧЕН.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 ПЕРЕДАЧА ДАННЫХ ДЛЯ КАЖДОГО СУББОТА 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*УСПЕШНОЕ РАСПРОСТРАНЕНИЕ ДЛЯ ${numUser} ВСПОМОГАТЕЛЬНЫЕ РОБОТЫ*\n\n${difuUser}\n\n*УСПЕХ В${tolUser} ВТОРОЙ*`}

//propietario(a).js
const smsChatGP1 = () => { return "* ОТПРАВКА СООБЩЕНИЯ, ПОДОЖДИТЕ МИНУТУ...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ * ОФИЦИАЛЬНЫЙ РЕЛИЗ*✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ * СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО ${totalGP} группы*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*НАПИШИТЕ ИМЯ ФАЙЛА ИЛИ КОМАНДУ ДЛЯ ОТПРАВКИ КОДА*\n*пример*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`КОД ФАЙЛА ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*КОД ДЛЯ'${text}' ЕГО НЕ НАШЛИ*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`КОД ФАЙЛА${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `Ошибка при отправке файла'${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `Произошла ошибка при отправке файла'${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻присоединился к группе_\n\n🫶 *был добавлен: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *Я ПОКИДАЮ ГРУППУ, БЫЛО ЗДОРОВО БЫТЬ ЗДЕСЬ 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *профиль* 🌸`}
const smsPerfil1 = () => { return `ПОЛЬЗОВАТЕЛЬ`}
const smsPerfil2 = () => { return `имя`}
const smsPerfil3 = () => { return `ВОЗРАСТЫ'`}
const smsPerfil4 = () => { return `номер`}
const smsPerfil5 = () => { return `РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОРE`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*SEI GIÀ' Записано!!*\n*ЕСЛИ ВЫ ХОТИТЕ УДАЛИТЬ ЗАПИСЬ, ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ*\n*${usedPrefix}unreg серийный номер*\n\n*ЕСЛИ ВЫ НЕ ПОМНИТЕ СВОЙ СЕРИЙНЫЙ НОМЕР, ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ*\n*${usedPrefix}майны`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*ВВЕДИТЕ СВОЕ ИМЯ И ВОЗРАСТ ДЛЯ РЕГИСТРАЦИИ*\n*пример*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВВЕДИТЕ СВОЕ ИМЯ*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВВЕДИТЕ СВОЙ ETA'*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*ТЫ СЛИШКОМ БОЛЬШОЙ*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*ТЫ СЛИШКОМ МАЛ.*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*НАПИШИ БОЛЕЕ КОРОТКОЕ ИМЯ*`}
const smsVerify7 = () => { return `✅ *В Е Р И Ф И К А З И Н Е* ✅`}
const smsVerify8 = (usedPrefix) => { return `*ВАШ РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР БУДЕТ ИСПОЛЬЗОВАТЬСЯ, ЕСЛИ ВЫ ХОТИТЕ ИЗМЕНИТЬ ИЛИ УДАЛИТЬ СВОЮ РЕГИСТРАЦИЮ, ИСПОЛЬЗУЯ ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `ЗНАЧОК ПРОВЕРКИ`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `* ОТВЕТИТЬ НА ВИДЕО, ИЗОБРАЖЕНИЕ ИЛИ НАПИСАТЬ ${usedPrefix + command} РЯДОМ СО ССЫЛКОЙ, КОТОРАЯ ЗАКАНЧИВАЕТСЯ .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*ВИДЕО НЕ ДОЛЖНО ДЛИТЬСЯ БОЛЕЕ 10 СЕКУНД*`}
const smsSticker3 = (usedPrefix, command) => { return `*IL ССЫЛКА НЕДЕЙСТВИТЕЛЬНА, ДОЛЖНА ЗАКОНЧИТЬСЯ .jpg .джэп .гиф .png пример:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*ВВЕДИТЕ СВОЙ РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР. ЕСЛИ ВЫ НЕ ЗНАЕТЕ, ЧТО ЭТО ТАКОЕ, ИСПОЛЬЗУЙТЕ КОМАНДУ ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*ВАШ РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР НЕВЕРЕН. ИСПОЛЬЗУЙТЕ КОМАНДУ ${usedPrefix}${idreg} ЧТОБЫ ИМЕТЬ ЕГО*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `* ВЫ ОТМЕНИЛИ СВОЕ ЧЛЕНСТВО ИЗ* ${packname}\n\n*ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ${usedPrefix}${regbot}ЧТОБЫ СДЕЛАТЬ НОВУЮ РЕГИСТРАЦИЮ*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️* РЕГИСТРАЦИЯ ID* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ * СООБЩЕНИЕ ОТПРАВЛЕНО:*`}
const smsBCbot2 = () => { return `ЧАСТНЫЙ`}
const smsBCbot3 = () => { return `группа`}
const smsBCbot4 = () => { return `ОБЩИЙ`}
const smsBCbot5 = () => { return `ОБЩЕЕ ВРЕМЯ ДОСТАВКИE:`}
const smsBCbot6 = () => { return `ОНИ НЕ БЫЛИ ОТПРАВЛЕНЫ ВО ВСЕ ЧАСТНЫЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ НАСЫЩЕНИЯ`}
const smsBCbot7 = () => { return `✅ * ОФИЦИАЛЬНЫЙ РЕЛИЗ* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `* ОТВЕТЬТЕ НА СООБЩЕНИЕ ИЛИ НАПИШИТЕ СООБЩЕНИЕ, ИСПОЛЬЗУЯ ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*ОТПРАВЛЯЯ ОФИЦИАЛЬНОЕ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ * СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО${totalPri} ПРИВАТНЫЙ ЧАТ*\n\n*в: ${time}*\n${totalPri >= 500000 ? '\n*ОНИ НЕ БЫЛИ ОТПРАВЛЕНЫ ВО ВСЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ НАСЫЩЕНИЯ*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*Перезагрузка 🚀🚀🚀*\n*ПОДОЖДИ МИНУТКУ*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *УСТАНОВКИ* ⚙️`}
const smsConfi2bot = () => { return `команды`}
const smsConfi3bot = () => { return `СОСТОЯНИЕ`}
const smsConfi4bot = () => { return `В`}
const smsConfi5bot = () => { return `АКТИВИРОВАННЫЙ`}
const smsConfi6bot = () => { return `ДЕЗАКТИВИРОВАННЫЙ`}
const smsConfi7bot = () => { return `ЭТОТ ЧАТ`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*КАК АДМИНИСТРАТОР ССЫЛКА НЕ БУДЕТ УДАЛЕНА*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}* БЫЛА ОБНАРУЖЕНА ССЫЛКА WHATSAPP!!*\n\n*ВЫ БУДЕТЕ УДАЛЕНЫ*`}
const smsWaMismoEnlace = () => { return `*ЭТО ССЫЛКА НА ГРУППУ, ОНА НЕ БУДЕТ УДАЛЕНА*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}* БЫЛА ОБНАРУЖЕНА ССЫЛКА HTTPS!!*\n\n*ВЫ БУДЕТЕ УДАЛЕНЫ*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ дезактированный'} 
const smsEncender = () => { return '✅ активный'} 
const smsEnlaceTik = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА TIKTOK!!*\n\n*ВЫ БУДЕТЕ УДАЛЕНЫ*`}
const smsEnlaceYt = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА  YOUTUBE!!*\n\n*вы будите удалены*`}
const smsEnlaceTel = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА  TELEGRAM!!*\n\n*вы будите удалены*`}
const smsEnlaceFb = () => { return `ОБНАРУЖЕНА ССЫЛКА НА  FACEBOOK!!*\n\n*вы будите удалены*`}
const smsEnlaceIg = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА  INSTAGRAM!!*\n\n*вы будите удалены*`}
const smsEnlaceTw = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА  TWITTER!!*\n\n*вы будите удалены*`}
const smsAllAdmin = () => { return `*Я ДОЛЖЕН БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ УДАЛИТЬ ПОЛЬЗОВАТЕЛЕЙ*`}
const smsSoloOwner = () => { return `*МОЙ ВЛАДЕЛЕЦ ДОЛЖЕН ВКЛЮЧИТЬ ФУНКЦИЮ RESTRICT*`}

//config-on y off.js
const smsParaAdmins = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ: ГРУППЫ`}
const smsParaAdYOw = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ: ЧАТ`}
const smsParaOw = () => { return `ДЛЯ СОЗДАТЕЛЯ: ЧАТ`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `ЭТОТ НОМЕР`}
const smsInt2 = () => { return `ОН НЕ ДОПУЩЕН В ЭТУ ГРУППУ!!`}

//handler.js
const smsCont1 = () => { return `*🥀 КОМАНДА НЕ УДАЛАСЬ🥀*`}
const smsCont2 = () => { return `*⛈️ Плагины:*`}
const smsCont3 = () => { return `*⛈️ ПОЛЬЗОВАТЕЛЬ:*`}
const smsCont4 = () => { return `*⛈️ команды:*`}
const smsCont5 = () => { return `*⛈️ ОШИБКА:*`}
const smsCont6 = () => { return `*✨ Сообщите об этом сообщении с помощью команды #report для решения*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}* У ВАС НЕТ БРИЛЛИАНТОВ!! 💎 ВЫ МОЖЕТЕ ПОЙТИ В МАГАЗИН С ПОМОЩЬЮ КОМАНДЫ*`}
const smsCont8 = () => { return ` *ИСПОЛЬЗОВАННЫЕ АЛМАЗЫ*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*ВАМ НУЖЕН УРОВЕНЬ➡️*`}
const smsCont10 = () => { return `*ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ. ВАШ ТЕКУЩИЙ УРОВЕНЬ ➡️*`}
const smsCont11 = () => { return `*ОБНОВЛЕНИЕ С ПОМОЩЬЮ КОМАНДЫ*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *  УДАЛИТЬ* ♻️\n*@${userDelete} ОН УДАЛИЛ СООБЩЕНИЕ!!*\n\n\`\`\`ОТПРАВИТЬ УДАЛЕННОЕ СООБЩЕНИЕ.....\`\`\``}
const smsHandler = () => { return "AGGIORNATO 'handler.js' CON SUCCESSO"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*ПРИВЕТ @${tagUserL} ${llamadaVideo ? 'ВИДЕОЗВОНКИ 📲' : 'ЗВОНКИ 📞'} В ЭТОМ ЧАТЕ ЗАПРЕЩЕНЫ. ВЫ БУДЕТЕ ЗАБЛОКИРОВАНЫ*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '* ОТВЕТ НА ГОЛОСОВУЮ ЗАМЕТКУ ИЛИ АУДИО*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*ЭТИ ПАРАМЕТРЫ ДОПУСКАЮТ ТОЛЬКО ЗАПИСЬ ЧИСЕЛ ${usedPrefix + command} ЗНАТЬ ПАРАМЕТРЫ*`}
const smsControlAudio3 = () => { return `*ПРОИЗОШЛА ОШИБКА, Я ПОПЫТАЛСЯ ИЗМЕНИТЬ ЗНАЧЕНИЯ ПАРАМЕТРОВ, И Я ПОМНЮ, ЧТО ПРИМЕНИТЬ ФИЛЬТР ДОЛЖЕН ОТВЕТИТЬ НА АУДИО ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsControlAudio4 = () => { return `*ОТВЕТЬТЕ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ, ЧТОБЫ ПРИМЕНИТЬ ФИЛЬТР*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Параметры обязательные)*
⎔ MIN: *20* | MAX: *20000*
⎔Дефолт: *94*
1️⃣👉 _центральная частота фильтра В Гц_

⎔ *(Обязательные параметры)*
⎔ MIN: *-30* | MAX: *30*
⎔ дефолт: *25*
2️⃣👉 _фильтрация прибыли в БД_

⎔ *(Опционные параметры)*
⎔ ОПЦИОНЫ: *"q", "h", "o"*
⎔ дефолт: *o*
3️⃣👉 _Фильтр типа полосы пропускания_
*q:* Коэффициент качества, более конкретная частота.
*h:* Постоянная полоса пропускания, равенство на всех частотах.
*o:* Полоса пропускания в октавах будет удваиваться или уменьшаться вдвое каждую октаву (каждый раз, когда частота удваивается или уменьшается вдвое).

⎔ *((Опционные параметры)*
⎔ MIN: *2* | MAX: *500*
⎔ дефолт: *5*
4️⃣👉 _Полоса пропускания в октавах будет удваиваться или уменьшаться вдвое каждую октаву (каждый раз, когда частота удваивается или уменьшается вдвое[q, h, o]_

*»» ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ЕСЛИ ВЫ НЕ ДОБАВИТЕ ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ ИЛИ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Обязательные параметры)*
⎔ MIN: *20* | MAX: *20000*
⎔ дефолт: *15*
1️⃣👉 _частота вибрации В Гц_

⎔ *(Обязательные параметры)*
⎔ MIN: *0* | MAX: *100*
⎔ дефолт: *0.5*
2️⃣👉 _Глубина вибрато, его конечное значение будет десятичным, если значение больше 95 будет целым числом_

*»» ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *8* | MAX: *32*
⎔ дефолт: *16*
1️⃣👉 _уровень квантования звуковых сэмплов в битах_

⎔ *(обязательные параметры)*
⎔ MIN: *500* | MAX: *48000*
⎔ дефолт: *44100*
2️⃣👉 _Количество раз в секунду, когда звук сэмплируется_

⎔ *(обязательные параметры)*
⎔ MIN: *0* | MAX: *100*
⎔ дефолт: *0.5*
3️⃣👉 _Уровень смешивания между исходным звуком и звуком с эффектом acrusher (его конечное значение будет десятичным, если оно меньше 95)_

⎔ *(обязательные параметры)*
⎔ MIN: *0* | MAX: *100*
⎔ дефолт: *0.5*
4️⃣👉_количество микширования между исходным звуком и измельченным звуком (его конечное значение будет целым числом, если оно больше 95)_

*»» ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ЕСЛИ ВЫ НЕ ДОБАВИТЕ ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ ИЛИ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `* _ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО АУДИО ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *15*
⎔ дефолт: *4*
1️⃣👉 _ВХОДНОЙ звук должен быть настроен на желаемую скорость воспроизведения и включает в себя изменение продолжительности звука_

⎔ *(обязательные параметры)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ дефолт: *48000*
2️⃣👉 _выход аудио дискретизации В Гц, установите желаемую частоту дискретизации_

*»» пример использования:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Обязательные параметры)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ дефолт: *6*
1️⃣👉 _Усилитель звука в дБ, отрицательное значение уменьшает звук звука, а положительное значение увеличивает звук звука_

*»» пример использования:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ПАРАМЕТР ЯВЛЯЕТСЯ ОБЯЗАТЕЛЬНЫМ, ЕСЛИ  ЕГО ПРЕДЕЛЫ ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `* _ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО АУДИО ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *100*
⎔ дефолт: *1.63*
1️⃣👉 _Изменение скорости воспроизведения аудиофайла_

⎔ *(обязательные параметры)*
⎔ MIN: *8000* | MAX: *48000*
⎔ дефолт: *44100*
2️⃣👉 _изменить частоту дискретизации аудиофайла_

*»» пример использования:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметрыi)*
⎔ MIN: *1* | MAX: *300*
⎔ дефолт: *1.3*_изменить скорость воспроизведения аудиофайла_
1️⃣👉 _Изменение скорости воспроизведения аудиофайла_

⎔ *(обязательные параметры)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ дефолт: *22100*
2️⃣👉 _изменить частоту дискретизации аудиофайла_

*»» пример использования:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*__ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *150*
⎔ дефолт: *1.06*
1️⃣👉 _Изменение скорости воспроизведения аудиофайла__

⎔ *(обязательные параметры)*
⎔ MIN: *1000* | MAX: *550000*
⎔ дефолт: *44100*
2️⃣👉 _изменить скорость воспроизведения аудиофайла_

⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *7*
⎔ дефолт: *1.25*
3️⃣👉 _установите умноженную частоту на желаемое значение_

*»» пример использования:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ ЕСЛИ ВЫ НЕ ДОБАВИТЕ НЕОБЯЗАТЕЛЬНЫЙ ПАРАМЕТР ИЛИ ПРЕВЫСИТЕ ЕГО ПРЕДЕЛЫ, ОН БУДЕТ ДОБАВЛЕН К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ЗВУКА ИСПОЛЬЗУЙТЕ СЛЕДУЮЩИЕ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *32* | MAX: *16384*
⎔ дефолт: *512*
1️⃣👉_размер фрагментов аудиосигнала, которые обрабатываются в любое время_

⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *100*
⎔ дефолт: *0.75*
2️⃣👉_полное перекрытие, используемое между последовательными окнами, делит аудиосигнал на сегменты или окна, чтобы применить к нему определенную обработку_

*»» пример использования:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ЗВУКА ИСПОЛЬЗУЙТЕ СЛЕДУЮЩИЕ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *0.5* | MAX: *12*
⎔ дефолт: *0.7*
1️⃣👉 _скорость воспроизведения звука. Значение 1.0-это нормальная скорость, в то время как значение больше 1.0 ускоряет воспроизведение, а значение меньше 1.0 замедляет его._

⎔ *(обязательные параметры*
⎔ MIN: *8000* | MAX: *48000*
⎔ дефолт: *44100*
2️⃣👉_частота дискретизации звука: указывает частоту дискретизации звука. Чем выше частота дискретизации, тем выше качество звука_

*»» пример использования:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ * ❕ ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*'}`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО ЗВУКА ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *5*
⎔ дефолт: *2*
1️⃣👉 _режим интерполяции движения, используемый фильтром._

⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *4*
⎔ дефолт: *2*
2️⃣👉 _режим компенсации движения, используемый фильтром._

⎔ *(обязательные параметры)*
⎔ MIN: *0* | MAX: *10*
⎔ дефолт: *1*
3️⃣👉_использование вертикальной интерполяции субпикселей_

⎔ *(обязательные параметры)*
⎔ MIN: *1* | MAX: *240*
⎔ дефолт: *120*
4️⃣👉 _проверьте частоту кадров вывода звука_

*»» ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ ЕСЛИ ВЫ НЕ ДОБАВИТЕ ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ ИЛИ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `* _ДЛЯ ПРАВИЛЬНОГО РЕДАКТИРОВАНИЯ ВАШЕГО АУДИО ИСПОЛЬЗУЙТЕ ЭТИ ПАРАМЕТРЫ_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Обязательные параметры)*
⎔ MIN: *0.5* | MAX: *10*
⎔ дефолт *0.5*
1️⃣👉 _регулирует скорость воспроизведения звука, не влияя на тон.__

⎔ *обязательные параметры)*
⎔ MIN: *2000* | MAX: *260000*
⎔ дефолт: *65100*
2️⃣👉 _регулирует частоту дискретизации звука, то есть количество сэмплов звука в секунду._

*»» пример использования:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_PER EFFETTUARE UNA CORRETTA MODIFICA DEL TUO AUDIO UTILIZZA QUESTI PARAMETRI_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(обязательные параметры)*
⎔ MIN: *0.001* | MAX: *5*
⎔ дефолт: *0.125*
1️⃣👉 _частота импульсной волны в герцах (Гц)_

⎔ *(обязательные параметры)*
⎔ MIN: *0.01* | MAX: *1*
⎔ дефолт: *1*
2️⃣👉 _регулирует количество модуляции, применяемой к аудио._

*»» пример использования*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ ВСЕ ПАРАМЕТРЫ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ, ЕСЛИ ВЫ ПРЕВЫСИТЕ ИХ ПРЕДЕЛЫ, ОНИ БУДУТ ДОБАВЛЕНЫ К ЗНАЧЕНИЮ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ЗВУКОВУЮ ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ`}
const smsControlAudio5 = () => { return `ПРИСВОЕННЫЕ ЗНАЧЕНИЯ:`}

//config.js
const smsConfigBot = () => { return "UPDATED 'config.js' SUCCESSFULLY"}

//menu-menu.js
const smsMenuTotal1 = () => { return "О МЕНЮ'"}
const smsMenuTotal2 = () => { return "ДЖАДИБОT"}
const smsMenuTotal3 = () => { return "ПОИСК / IA"}
const smsMenuTotal4 = () => { return "загрузки"}
const smsMenuTotal5 = () => { return "КОНВЕРТИТОРИ"}
const smsMenuTotal6 = () => { return "ГРУППА ~ ВСЕ"}
const smsMenuTotal7 = () => { return "ГРУППА ~ АДМИНИСТРАТОРЫ" }
const smsMenuTotal8 = () => { return "РЕДАКТИРОВАНИЕ АУДИО"}
const smsMenuTotal9 = () => { return "ЗВУКОВЫЕ ЭФФЕКТЫ"}
const smsMenuTotal10 = () => { return "УСТАНОВКИ"}
const smsMenuTotal11 = () => { return "ЧТОБЫ ПРОВЕРИТЬ"}
const smsMenuTotal12 = () => { return "СОЗДАТЕЛЬ"}

//Error2
const smsMensError1 = () => { return `❕КОМАНДНАЯ ОТЧЕТНОСТЬ❕`} 
const smsMensError2 = () => { return `Следующая команда не может быть выполнена`} 

//config.js
const smsMeWait = () => { return '*⌛ПОДОЖДИ МИНУТКУ, ПОЖАЛУЙСТА...*'} 

//buscadores.js
const smsytserh1 = () => { return 'ТИТИЛО'} 
const smsytserh2 = () => { return 'ССЫЛКА'} 
const smsytserh3 = () => { return 'ПРОДОЛЖИТЕЛЬНОСТЬ'} 
const smsytserh4 = () => { return 'ЗАРЯЖЕННЫЙ'} 
const smsytserh5 = () => { return 'Визуализация'} 

//descargas.js
const smsIAimage = () => { return '💻 ИЗОБРАЖЕНИЕ, СДЕЛАННОЕ С ПОМОЩЬЮ AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return `Фиолетовая кошка с синим существом в Юпитере, освещает космос своим очарованием с минималистским эффектом.`} 
const smsIAimage3 = () => { return '💻 * Изображение, созданное с AI / Midjourney*✨'} 
const smsIAimage4 = () => { return 'Леший, бежит по луже, отражается в луже, фотографирует.'} 

//descargas.js
const smsyFBvid1 = () => { return '*НЕДОПУСТИМАЯ ССЫЛКА, НЕ ЗАБУДЬТЕ ИСПОЛЬЗОВАТЬ ССЫЛКУ НА ВИДЕО В FACEBOOK*'} 
const smsyFBvid2 = () => { return 'ВИДЕО ИЗ СКАЧАННОЙ ГРУППЫ  💚'} 
const smsyFBvid3 = () => { return 'FACEBOOK VIDEO REEL СКАЧАЛ 💚'} 
const smsyFBvid4 = () => { return 'ЗАГРУЖЕННОЕ ВИДЕО ИСТОРИЙ FACEBOOK 💚'} 
const smsyFBvid5 = () => { return 'ВИДЕО ПОСТ НА FACEBOOK СКАЧАНО 💚'} 
const smsyFBvid6 = () => { return 'ВИДЕО СКАЧАНО С FACEBOOK💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*ПРИНИМАЮТСЯ ТОЛЬКО ЦИФРЫ, А НЕ БУКВЫ*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `* Введите полный номер пользователя, которого вы хотите пригласить в группу* \ n*пример:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡ПРИВЕТ! *@${NumeroUser}* Я ${packname}, бот для WhatsApp. Кажется*@${user}* он приглашает вас в группу ${groupMetadata.subject}\n\n\`\`\`¡Мы ждем вас в группе!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `* ПРИГЛАШЕНИЕ ОТПРАВЛЕНО В ЧАСТНОМ ПОРЯДКЕ @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ*${usedPrefix} чтобы получить ссылку на конкретную песню_`} 
const smsSP1 = () => { return '✨ *НАЗВАНИЕ:*'} 
const smsSP2 = () => { return '🗣️ *ХУДОЖНИК:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *URL-АДРЕС ДЛЯ ЗАГРУЗКИ:*'} 
const smsSP5 = () => { return '🎶 *Я ОТПРАВЛЯЮ ПЕСНЮ...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}* НЕ НАЙДЕНО РЕЗУЛЬТАТОВ. ПОПРОБУЙТЕ ДРУГОЕ ИМЯ ИЛИ ССЫЛКУ*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*НАЗВАНИЕ ГРУППЫ ИЗМЕНИЛОСЬ*\n\n🔰 * ТЕПЕРЬ ГРУППА НАЗЫВАЕТСЯ:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*Изображение было изменено:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*ЭТО ПОЗВОЛИЛО ${m.messageStubParameters[0] == 'on' ? 'ТОЛЬКО АДМИНИСТРАТОРЫ': 'ВСЕ'}ОНИ МОГУТ ' НАСТРОИТЬ ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*ССЫЛКА НА ${groupMetadata.subject}ОН БЫЛ СБРОШЕН:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject}ЭТО БЫЛО ${m.messageStubParameters[0] == 'on' ? 'ЗАКРЫТО 🔒': 'ОТКРЫТО🔓'}В ${usuario}*\n\n💬 *ТЕПЕРЬ${m.messageStubParameters[0] == "на"? "ТОЛЬКО АДМИНИСТРАТОРЫ": 'ВЕСЬ'}ОНИ МОГУТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]}ТЕПЕРЬ ЯВЛЯЕТСЯ АДМИНИСТРАТОРОМ ГРУППЫ*\n*» ${groupMetadata.subject}*\n\n✨ *ДЕЙСТВИЕ ОСУЩЕСТВЛЯЕТСЯ:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} ТЕПЕРЬ ОН БОЛЬШЕ НЕ АДМИНИСТРАТОР ГРУППЫ*\n*» ${groupMetadata.subject}*\n\n✨ *ДЕЙСТВИЕ ОСУЩЕСТВЛЯЕТСЯ:*\n*» ${usuario}*`} 


export default { lenguaje, smsAvisoRG, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportGB1, smsReportGB2, smsReportGB3, smsReportGB3, smsReportGB4, smsReportGB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait,
smsytserh1, smsytserh2, smsytserh3, smsytserh4, smsytserh5, smsTiktok, smsIAimage, smsIAimage2, smsIAimage3, smsIAimage4, smsyFBvid1, smsyFBvid2, smsyFBvid3,
smsyFBvid4, smsyFBvid5, smsyFBvid6, smsInvite1, smsInvite2, smsInvite3, smsInvite4, smsSP0, smsSP1, smsSP2, smsSP3, smsSP4, smsSP5, smsSP6, smsAutodetec1, smsAutodetec2,
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsJBConexionClose2, smsreenvia, smsIniJadi2, methodCode1, methodCode2, methodCode3, methodCode4, methodCode5, methodCode6, methodCode7, methodCode8, methodCode9, methodCode10, methodCode11, methodCode12, methodCode13, methodCode14, phNumber, phNumber2, phNumber3, pairingCode }
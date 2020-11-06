const Telegram = require('node-telegram-bot-api');

const token     = process.env.TOKEN;

const botInstance = new Telegram(token, { polling: true });

botInstance.on('message', function(msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString();
    console.log(message);
    if (message == 'hi') {
        botInstance.sendMessage(chatId, "Hi, i am new chat bot")
    }
})

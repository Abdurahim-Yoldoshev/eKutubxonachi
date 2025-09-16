const { bot } = require('./bot');  // `bot`ni import qilamiz
const { start } = require('./helper/start');  // `start` funksiyasini import qilamiz

bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.from.id;

    if (text === '/start') {
        start(msg);  // `start` funksiyasini chaqiramiz
    }
});

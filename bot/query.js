const { bot } = require("../bot/bot");
const User = require("../module/user");
const { settingsMain } = require("./helper/settings");

bot.on("callback_query", async (query) => {
    const chatId = query.from.id;
    const data = query.data;
    console.log(data);
    

    if (data === "settings") {
        bot.deleteMessage(chatId, query.message.message_id);
        settingsMain(chatId);
    }
    if (data === "back_to_menu") {
        bot.deleteMessage(chatId, query.message.message_id);
        const msg = {
            from: query.from
        };
        const { start } = require("./helper/start");
        start(msg);
    }
});
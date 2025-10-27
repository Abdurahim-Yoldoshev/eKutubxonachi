const { bot } = require("../bot");
const User = require("../../module/user");
const { settings } = require("../button/settings");

const settingsMain = async (chatId) =>{
    await bot.sendMessage(chatId, `<b>Sozlamalar menyusiga xush kelibsiz!</b> \n\n⚙️ Quyidagi opsiyalardan birini tanlang:`, {
        reply_markup: {
            inline_keyboard: settings
        },
        parse_mode: "HTML"
    });
};

module.exports = {
    settingsMain
};
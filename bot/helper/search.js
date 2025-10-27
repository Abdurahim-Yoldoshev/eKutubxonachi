const { bot } = require("../bot");
const User = require("../../module/user");
const Book = require("../../module/book");

const search = async (chatId, text) => {
    const user = await User.findOne({ chatId }).lean();
    const books = await Book.find({ title: { $regex: text, $options: "i" } }).lean();
    
    if (books.length === 0) {
        bot.sendMessage(chatId, `🔍 Hech qanday kitob topilmadi: "${text}". Iltimos, boshqa nom bilan urinib ko'ring.`);
    } else {
        let searching = "Qidirilmoqda..."
        bot.sendMessage(chatId, searching).then((sentMsg) => {
            books.forEach((book) => {
                const bookInfo = `<b>${book.title}</b>\nMuallif: ${book.author}\nJanr: ${book.genre}\n\n${book.description}`;   
                bot.sendMessage(chatId, bookInfo, { parse_mode: "HTML" });
            });
            bot.deleteMessage(chatId, sentMsg.message_id);
        });
 }
}

module.exports = {
    search
};
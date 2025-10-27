// ...existing code...
const { bot } = require('../bot');
const User = require('../../module/user');

const start = async (msg) => {
    const chatId = msg.from.id;
    
    // Foydalanuvchini topish
    const user = await User.findOne({ chatId }).lean();

    if (!user) {
        // Yangi foydalanuvchini yaratish
        let newUser = new User({
            name: msg.from.first_name,
            user: msg.from.username,
            chatId,
            action: "Start",
            createdAt: new Date(),
            role: chatId === 8466713648 ? "Super" : "User",
            status: true
        });
        
        await newUser.save();
        // Admin yoki User uchun tegishli menyu
        if (chatId === 8466713648) {
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

Bu bot sizga:
    Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    Eng mashhur kitoblarni ko‘rish 🌟
    Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Sozlamalar ⚙️", callback_data: "settings" },
                        ]
                    ]
                }
            });
        } else {
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

🤖<b>Bu bot sizga</b>:
    • Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    • Eng mashhur kitoblarni ko‘rish 🌟
    • Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                parse_mode: "HTML"
            });
            bot.sendMessage(chatId, `📔 Kitob nomini yozing...`)
        }
    } else {
        // Admin va User uchun tegishli menyuni ko'rsatish
        if (user.role === "Super") {
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

🤖<b>Bu bot sizga</b>:
    • Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    • Eng mashhur kitoblarni ko‘rish 🌟
    • Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Sozlamalar ⚙️", callback_data: "settings" },
                        ]
                    ]
                },
                parse_mode: "HTML"
            });
        } else {
            bot.sendMessage(chatId,`            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

🤖<b>Bu bot sizga</b>:
    • Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    • Eng mashhur kitoblarni ko‘rish 🌟
    • Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, { parse_mode:"HTML"
            });
            bot.sendMessage(chatId, `📔 Kitob nomini yozing...`)
        }
    }
};

module.exports = {
    start
};
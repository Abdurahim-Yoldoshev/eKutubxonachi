const { bot } = require('../bot');
const User = require('../../module/user');
const { adminMenu, UserMenu } = require('../button/menu');

const start = async (msg) => {
    const chatId = msg.from.id;
    
    // Foydalanuvchini topish
    const user = await User.findOne({ chatId }).lean();  // `await` qo'shildi

    if (!user) {
        // Yangi foydalanuvchini yaratish
        let newUser = new User({
            name: msg.first_name,
            user: msg.from.username,
            chatId,
            action: "Start",
            createdAt: new Date(),
            role: chatId === 8466713648 ? "Super" : "User",  // `chatId` ni son sifatida taqqosladik
            status: true
        });
        
        await newUser.save();  // Yangi foydalanuvchini saqlash
        // Admin yoki User uchun tegishli menyu
        if (chatId === 8466713648) {  // Agar foydalanuvchi admin bo'lsa
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

Bu bot sizga:
    Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    Eng mashhur kitoblarni ko‘rish 🌟
    Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                reply_markup: {
                    inline_keyboard: adminMenu  // Admin uchun menyu
                }
            });
        } else {
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

Bu bot sizga:
    Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    Eng mashhur kitoblarni ko‘rish 🌟
    Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                reply_markup: {
                    inline_keyboard: UserMenu  // Oddiy foydalanuvchi uchun menyu
                }
            });
        }
    } else {
        // Admin va User uchun tegishli menyuni ko'rsatish
        if (user.role === "Super") {
            bot.sendMessage(chatId, `            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

Bu bot sizga:
    Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    Eng mashhur kitoblarni ko‘rish 🌟
    Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                reply_markup: {
                    inline_keyboard: adminMenu
                },
                parse_mode: "HTML"
            });
        } else {
            bot.sendMessage(chatId,`            <b>Elektron Kutubxonachi Bot</b>ga xush kelibsiz! 📚

Bu bot sizga:
    Kitoblarni nomi, janri yoki muallifi bo‘yicha qidirish 🔍
    Eng mashhur kitoblarni ko‘rish 🌟
    Yangi qo‘shilgan kitoblar bilan tanishish 📅

Yangi kitoblarni kashf eting va o'qish dunyosiga sho'ng'ing!`, {
                reply_markup: {
                    inline_keyboard: UserMenu
                }, parse_mode:"HTML"
            });
        }
    }
};

module.exports = {
    start
};

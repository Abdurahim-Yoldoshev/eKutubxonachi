const { text } = require("express");

const UserMenu = [
  [{ text: '🔍 Qidiruv', callback_data: 'search' }, { text: '🎬 Janrlar', callback_data: 'genres' }],
  [{ text: '🌟 Top 10', callback_data: 'top10' }, { text: '📅 Oxirgilar', callback_data: 'lasts' }],
  [{ text: '❓ Yordam', callback_data: 'help' }]
];

const adminMenu = [
  [{ text: '🔍 Qidiruv', callback_data: 'search' }, { text: '🎬 Janrlar', callback_data: 'genres' }],
  [{ text: '🌟 Top 10', callback_data: 'top10' }, { text: '📅 Oxirgilar', callback_data: 'lasts' }],
  [{ text: '❓ Yordam', callback_data: 'help' }],
  [{text:'⚙️ Sozlamalar', callback_data: "settings"}]
];

module.exports = {
    adminMenu,
    UserMenu
}
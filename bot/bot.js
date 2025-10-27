const TELEGRAM_API = require('node-telegram-bot-api');
const bot = new TELEGRAM_API(process.env.TOKEN,{polling:true})

module.exports = {bot};
require('./msg');
require('./query');

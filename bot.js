const TelegramBot = require("node-telegram-bot-api");

const token = "6504169537:AAE3tMfkRwOFnrdyhd4VlZs3_uNfBPVlM9M";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Assalomu alaykum!");
});

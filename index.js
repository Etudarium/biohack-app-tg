import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

const WEB_APP_URL = process.env.WEB_APP_URL;

bot.start((ctx) => {
  ctx.reply('Привет! 👋 Нажми кнопку ниже, чтобы открыть приложение.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть Mini App', web_app: { url: WEB_APP_URL } }]
      ]
    }
  });
});

bot.launch();

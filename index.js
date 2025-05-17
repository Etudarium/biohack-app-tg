import { Telegraf } from 'telegraf';
import express from 'express';

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

// 👇 Добавляем фейковый сервер для Render
const app = express();
app.get('/', (req, res) => res.send('Bot is running'));
app.listen(process.env.PORT || 3000, () => {
  console.log('Fake server is running');
});


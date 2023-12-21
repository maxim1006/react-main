import TelegramApi from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN;

export const BOT = new TelegramApi(token!, { polling: true });

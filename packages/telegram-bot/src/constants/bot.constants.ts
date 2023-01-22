import TelegramApi from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { isProd } from './common.constants';

dotenv.config();

const token = isProd ? process.env.TOKEN : process.env.TOKEN_DEV;

export const BOT = new TelegramApi(token!, { polling: true });

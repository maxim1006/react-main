import dotenv from 'dotenv';
import TelegramApi from 'node-telegram-bot-api';
import { BUTTONS, COMMANDS } from './constants/common.constants.js';
import { convertCommandsToStringList, getRandomInteger } from './utils/common.utils.js';

dotenv.config();

const token = process.env.TOKEN;
// const telegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(token, { polling: true });

// это аля симуляция БД
const chats = {};

async function main() {
    await bot.setMyCommands(
        Object.entries(COMMANDS).map(([command, description]) => ({
            command,
            description,
        }))
    );

    bot.on('message', async msg => {
        console.log({ msg });
        const chat = msg.chat;
        const text = msg.text;
        const chatId = msg.chat.id;

        // когда пользователь первый раз открыл бота и нажал на кнопку подключиться сработает /start
        if (text === '/start') {
            await bot.sendSticker(
                chatId,
                'https://tlgrm.ru/_/stickers/ef5/8e1/ef58e15f-94a2-3d56-a365-ca06e1339d08/2.jpg'
            );
            await bot.sendMessage(chatId, `Hello ${chat.username}`);
            return;
        }

        if (text === '/info') {
            return await bot.sendMessage(chatId, `Your first name: ${msg.from.first_name}`);
        }

        if (text === '/buttons') {
            chats[chatId] = getRandomInteger();
            return await bot.sendMessage(chatId, `Угадай загаданное число `, BUTTONS);
        }

        return await bot.sendMessage(
            chatId,
            `Не понимаю команду, доступные команды ${convertCommandsToStringList(COMMANDS)} `
        );
    });

    await bot.on('callback_query', async msg => {
        console.log({ msg });

        const chatId = msg.message.chat.id;
        const data = msg.data;

        if (chats[chatId] === data) return await bot.sendMessage(chatId, `Воу, правильно, загадали ${data}`);

        return await bot.sendMessage(chatId, `Эх не повезло, загадали ${chats[chatId]}`);
    });
}

main();

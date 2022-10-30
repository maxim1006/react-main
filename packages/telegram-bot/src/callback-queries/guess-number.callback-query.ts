import {
    CallbackGuessNumberDataEnum,
    SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN,
} from '../constants/guess-number.constants';
import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { CHATS_DB } from '../db/db';
import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { MessageEnum } from '../models/message.model';

export const handleGuessNumberCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;

    if (!chatId) return console.error('handleGuessNumberCbQuery no chatId');

    if (data === CallbackGuessNumberDataEnum.GuessNumberAgain)
        return await handleGuessNumberMessage({ chat });

    const chatValue = CHATS_DB[chatId];

    if (chatValue.type === MessageEnum.GuessNumber && chatValue.value === Number(data))
        return await BOT.sendMessage(
            chatId,
            `Воу, правильно, загадали ${data}`,
            SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN
        );

    return await BOT.sendMessage(
        chatId,
        `Эх не повезло, загадали ${chatValue.value}`,
        SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN
    );
};

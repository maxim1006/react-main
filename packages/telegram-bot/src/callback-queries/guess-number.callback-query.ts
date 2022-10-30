import {
    CallbackGuessNumberDataEnum,
    SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN,
} from '../constants/guess-number.constants';
import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { CHATS_DB } from '../db/db';
import { MessageTypesEnum } from '../constants/message.constants';
import { BOT } from '../constants/bot.constants';
import { Chat } from 'node-telegram-bot-api';

export const handleGuessNumberCbQuery = async ({
    data,
    chat: { id: chatId },
}: {
    chat: Chat;
    data?: string;
}) => {
    if (!chatId) return console.error();

    if (data === CallbackGuessNumberDataEnum.GuessNumberAgain)
        return await handleGuessNumberMessage({ chatId });

    const chatValue = CHATS_DB[chatId];

    if (chatValue.type === MessageTypesEnum.GuessNumber && chatValue.value === Number(data))
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

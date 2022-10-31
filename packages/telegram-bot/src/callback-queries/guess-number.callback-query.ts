import {
    CallbackGuessNumberDataEnum,
    SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN,
} from '../constants/guess-number.constants';
import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { GuessNumberGameModel } from '../models/guess-number-game.model';

export const handleGuessNumberCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const userName = chat?.username;

    if (!chatId) return console.error('handleGuessNumberCbQuery no chatId');
    if (!userName) return console.error('handleGuessNumberCbQuery no userName');
    if (!data) return console.error('handleGuessNumberCbQuery no message data');

    console.log({ data });
    if (data === CallbackGuessNumberDataEnum.GuessNumberAgain)
        return await handleGuessNumberMessage({ chat, msg: msg.message });

    const [gameId, answer] = data?.split(' ');
    const gameData = await getTodayUserGameById<GuessNumberGameModel>({
        gameId,
        userName,
        gameType: MessageEnum.GuessNumber,
    });

    if (gameData?.task === Number(answer))
        return await BOT.sendMessage(
            chatId,
            `Воу, правильно, загадали ${gameData?.task}`,
            SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN
        );

    return await BOT.sendMessage(
        chatId,
        `Эх не повезло, загадали ${gameData?.task}`,
        SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN
    );
};

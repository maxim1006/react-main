import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { GuessNumberGameModel } from '../models/guess-number-game.model';
import {
    CallbackPlayAgainEnum,
    SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN,
} from '../constants/play-again.constants';

export const handleGuessNumberCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const firstName = chat?.first_name;

    if (!chat) return console.error('handleGuessNumberCbQuery no chat');
    if (!chatId) return console.error('handleGuessNumberCbQuery no chatId');
    if (!firstName) return console.error('handleGuessNumberCbQuery no firstName');
    if (!data) return console.error('handleGuessNumberCbQuery no message data');

    if (data === CallbackPlayAgainEnum.GuessNumber)
        return await handleGuessNumberMessage({ chat, msg: msg.message });

    const [gameId, answer] = data?.split(' ');
    const gameData = await getTodayUserGameById<GuessNumberGameModel>({
        gameId,
        firstName,
        gameType: MessageEnum.GuessNumber,
    });

    if (!gameData) return console.error('handleGuessNumberCbQuery gameData error');

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

import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { GuessNumberGameModel } from '../models/guess-number-game.model';
import { CallbackPlayAgainEnum, getPlayAgainMarkup } from '../constants/play-again.constants';

export const handleGuessNumberCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const username = chat?.username;

    if (!chat) return console.error('Error handleGuessNumberCbQuery no chat');
    if (!chatId) return console.error('Error handleGuessNumberCbQuery no chatId');
    if (!username) return console.error('Error handleGuessNumberCbQuery no username');
    if (!data) return console.error('Error handleGuessNumberCbQuery no message data');

    if (data === CallbackPlayAgainEnum.GuessNumber)
        return await handleGuessNumberMessage({ chat, msg: msg.message });

    const [gameId, answer] = data?.split(' ');
    const gameData = await getTodayUserGameById<GuessNumberGameModel>({
        gameId,
        username,
        gameType: MessageEnum.GuessNumber,
    });

    if (!gameData) return console.error('Error handleGuessNumberCbQuery gameData error');

    if (gameData?.task === Number(answer))
        return await BOT.sendMessage(
            chatId,
            `Умничка, правильно, загадали ${gameData?.task}`,
            getPlayAgainMarkup(CallbackPlayAgainEnum.GuessNumber)
        );

    return await BOT.sendMessage(
        chatId,
        `Эх не повезло, загадали ${gameData?.task}`,
        getPlayAgainMarkup(CallbackPlayAgainEnum.GuessNumber)
    );
};

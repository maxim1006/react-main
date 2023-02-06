import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { GuessNumberGameModel } from '../models/guess-number-game.model';
import { CallbackPlayAgainEnum, getPlayAgainMarkup } from '../constants/play-again.constants';
import { handleClockGameMessage } from '../messages/clock-game.message';
import { CLOCK_ANSWERS } from '../constants/clock-answers.constants';
import { getRandomImagePath } from '../utils/image.utils';
import { SAD_EMOJI } from '../constants/emoji.constants';

export const handleClockGameCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const username = chat?.username;

    if (!chat) return console.error('Error handleClockGameCbQuery no chat');
    if (!chatId) return console.error('Error handleClockGameCbQuery no chatId');
    if (!username) return console.error('Error handleClockGameCbQuery no username');
    if (!data) return console.error('Error handleClockGameCbQuery no message data');

    if (data === CallbackPlayAgainEnum.ClockGame)
        return await handleClockGameMessage({ chat, msg: msg.message });

    const [gameId, userAnswer] = data?.split(' ');
    const gameData = await getTodayUserGameById<GuessNumberGameModel>({
        gameId,
        username,
        gameType: MessageEnum.ClockGame,
    });

    if (!gameData) return console.error('Error handleClockGameCbQuery gameData error');

    const correctAnswer = CLOCK_ANSWERS[gameData.task ?? ''];
    const [correctH, correctM] = correctAnswer.split(':');
    const [userH, userM] = userAnswer.split(':');

    if (correctH === userH && +userM > +correctM - 5 && +userM < +correctM + 5) {
        await BOT.sendPhoto(chatId, getRandomImagePath('photos'));
        return await BOT.sendMessage(
            chatId,
            `Молодец, правильно часы показывают ${userAnswer}`,
            getPlayAgainMarkup(CallbackPlayAgainEnum.ClockGame)
        );
    }

    await BOT.sendMessage(chatId, SAD_EMOJI);

    return await BOT.sendMessage(
        chatId,
        `Неверно, часы показывают ${correctAnswer}`,
        getPlayAgainMarkup(CallbackPlayAgainEnum.ClockGame)
    );
};

import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById, getTodayUserGameStatsByGameType } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { CallbackPlayAgainEnum, getPlayAgainMarkup } from '../constants/play-again.constants';
import { getRandomImagePath } from '../utils/image.utils';
import { SAD_EMOJI } from '../constants/emoji.constants';
import { handleEnglishGameTaskMessages } from '../messages/english-game.message';
import { EnglishGameModel } from '../models/english-game.model';
import { updateTodayLastGameByType } from '../db/game.db';
import { getUserEnglishDictionary } from '../utils/user.utils';

export const handleEnglishGameCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const username = chat?.username;

    if (!chat) return console.error('Error handleEnglishGameCbQuery no chat');
    if (!chatId) return console.error('Error handleEnglishGameCbQuery no chatId');
    if (!username) return console.error('Error handleEnglishGameCbQuery no username');
    if (!data) return console.error('Error handleEnglishGameCbQuery no message data');

    if (data === CallbackPlayAgainEnum.EnglishGame)
        return await handleEnglishGameTaskMessages({ chat, msg: msg.message });

    const [gameId, userAnswer] = data?.split(' ');
    const gameData = await getTodayUserGameById<EnglishGameModel>({
        gameId,
        username,
        gameType: MessageEnum.EnglishGame,
    });

    if (!gameData) return console.error('Error handleEnglishGameCbQuery gameData error');

    const correctAnswer = getUserEnglishDictionary(username)[gameData.task.value.key];
    const isCorrect = !!userAnswer;

    await updateTodayLastGameByType({
        gameType: MessageEnum.EnglishGame,
        username,
        data: {
            answer: {
                isCorrect,
                value: gameData.task.value.key,
            },
        },
    });

    const stats = await getTodayUserGameStatsByGameType({
        gameType: MessageEnum.EnglishGame,
        username,
    });

    if (isCorrect) {
        await BOT.sendPhoto(chatId, getRandomImagePath('photos'));
        return await BOT.sendMessage(
            chatId,
            `Молодец, правильно! <b>${
                gameData.task.value.key
            }</b> переводится как <b>${correctAnswer.toString()}</b>
Сегодня сыграно <b>${stats?.all}</b>, правильных ответов: <b>${stats?.correct}</b>`,
            {
                parse_mode: 'HTML',
                ...getPlayAgainMarkup(CallbackPlayAgainEnum.EnglishGame),
            }
        );
    }

    await BOT.sendMessage(chatId, SAD_EMOJI);

    return await BOT.sendMessage(
        chatId,
        `Неверно, <b>${
            gameData.task.value.key
        }</b> переводится как <b>${correctAnswer.toString()}</b>`,
        {
            parse_mode: 'HTML',
            ...getPlayAgainMarkup(CallbackPlayAgainEnum.EnglishGame),
        }
    );
};

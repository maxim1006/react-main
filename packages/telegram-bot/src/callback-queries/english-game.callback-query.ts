import { BOT } from '../constants/bot.constants';
import { CallbackQuery } from 'node-telegram-bot-api';
import { getTodayUserGameById } from '../db/user.db';
import { MessageEnum } from '../models/message.model';
import { CallbackPlayAgainEnum, getPlayAgainMarkup } from '../constants/play-again.constants';
import { getRandomImagePath } from '../utils/image.utils';
import { SAD_EMOJI } from '../constants/emoji.constants';
import { handleEnglishGameTaskMessages } from '../messages/english-game.message';
import { EnglishGameModel } from '../models/english-game.model';
import { ENGLISH_WORDS_DICTIONARY } from '../constants/english.constants';
import { updateTodayLastGameByType } from '../db/game.db';

export const handleEnglishGameCbQuery = async ({ msg }: { msg: CallbackQuery }) => {
    const chat = msg.message?.chat;
    const chatId = chat?.id;
    const data = msg.data;
    const firstName = chat?.first_name;

    if (!chat) return console.error('Error handleEnglishGameCbQuery no chat');
    if (!chatId) return console.error('Error handleEnglishGameCbQuery no chatId');
    if (!firstName) return console.error('Error handleEnglishGameCbQuery no firstName');
    if (!data) return console.error('Error handleEnglishGameCbQuery no message data');

    if (data === CallbackPlayAgainEnum.EnglishGame)
        return await handleEnglishGameTaskMessages({ chat, msg: msg.message });

    const [gameId, userAnswer] = data?.split(' ');
    const gameData = await getTodayUserGameById<EnglishGameModel>({
        gameId,
        firstName,
        gameType: MessageEnum.EnglishGame,
    });

    if (!gameData) return console.error('Error handleEnglishGameCbQuery gameData error');

    const correctAnswer = ENGLISH_WORDS_DICTIONARY[gameData.task.value.key];
    const isCorrect = !!userAnswer;

    await updateTodayLastGameByType({
        gameType: MessageEnum.EnglishGame,
        firstName,
        data: {
            answer: {
                isCorrect,
                value: gameData.task.value.key,
            },
        },
    });

    if (isCorrect) {
        await BOT.sendPhoto(chatId, getRandomImagePath('photos'));
        return await BOT.sendMessage(
            chatId,
            `Молодец, правильно! <b>${
                gameData.task.value.key
            }</b> переводится как <b>${correctAnswer.toString()}</b>`,
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

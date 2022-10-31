import { getRandomInteger } from '../utils/common.utils';
import { BOT } from '../constants/bot.constants';
import { addGuessNumberGameToUser } from '../db/guess-number-game.db';
import { MessageBaseModel } from '../models/message.model';

export const handleGuessNumberMessage = async ({ msg }: MessageBaseModel) => {
    const userName = msg?.chat?.username;
    const chatId = msg?.chat.id;

    if (!chatId) return console.error('handleGuessNumberMessage no chatId');
    if (!userName) return console.error('handleGuessNumberMessage Alarm ghost in town!!!');

    const data = await addGuessNumberGameToUser({
        userName,
        game: { task: getRandomInteger() },
    });

    const gameId = data?.gameId;

    await BOT.sendMessage(chatId, `Угадай загаданное число `, {
        reply_markup: {
            inline_keyboard: [
                // тут прикольно что кнопки будут в 1 ряд, также пришлось прокидывать gameId чтобы понимать для какой игры пришел ответ
                [
                    {
                        text: '1',
                        callback_data: `${gameId} 1`,
                    },
                    {
                        text: '2',
                        callback_data: `${gameId} 2`,
                    },
                    {
                        text: '3',
                        callback_data: `${gameId} 3`,
                    },
                ],
                [
                    {
                        text: '4',
                        callback_data: `${gameId} 4`,
                    },
                    {
                        text: '5',
                        callback_data: `${gameId} 5`,
                    },
                    {
                        text: '6',
                        callback_data: `${gameId} 6`,
                    },
                ],
                [
                    {
                        text: '7',
                        callback_data: `${gameId} 7`,
                    },
                    {
                        text: '8',
                        callback_data: `${gameId} 8`,
                    },
                    {
                        text: '9',
                        callback_data: `${gameId} 9`,
                    },
                ],
                [
                    {
                        text: '0',
                        callback_data: `${gameId} 0`,
                    },
                ],
            ],
        },
    });
};

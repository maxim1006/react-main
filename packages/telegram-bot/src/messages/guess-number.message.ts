import { getRandomInteger } from '../utils/common.utils';
import { BOT } from '../constants/bot.constants';
import { SEND_MESSAGE_OPTIONS_GUESS_NUMBER } from '../constants/guess-number.constants';
import { addGuessNumberGameToUser } from '../db/guess-number-game.db';
import { MessageBaseModel } from '../models/message.model';

export const handleGuessNumberMessage = async ({ msg }: MessageBaseModel) => {
    const userName = msg?.from?.username;
    const chatId = msg?.chat.id;

    if (!chatId) return console.error('handleGuessNumberMessage no chatId');
    if (!userName) return console.error('handleGuessNumberMessage Alarm ghost in town!!!');

    await addGuessNumberGameToUser({ userName, game: { task: getRandomInteger() } });
    await BOT.sendMessage(chatId, `Угадай загаданное число `, SEND_MESSAGE_OPTIONS_GUESS_NUMBER);
};

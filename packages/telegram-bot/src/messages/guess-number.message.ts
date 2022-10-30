import { CHATS_DB } from '../db/db';
import { MessageTypesEnum } from '../constants/message.constants';
import { getRandomInteger } from '../utils/common.utils';
import { BOT } from '../constants/bot.constants';
import { SEND_MESSAGE_OPTIONS_GUESS_NUMBER } from '../constants/guess-number.constants';

export const handleGuessNumberMessage = async ({ chatId }: { chatId: number }) => {
    CHATS_DB[chatId] = { type: MessageTypesEnum.GuessNumber, value: getRandomInteger() };
    await BOT.sendMessage(chatId, `Угадай загаданное число `, SEND_MESSAGE_OPTIONS_GUESS_NUMBER);
};

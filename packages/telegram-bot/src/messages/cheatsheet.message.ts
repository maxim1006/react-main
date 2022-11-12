import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleCheatSheetMessages = async ({ chat, msg }: MessageBaseModel) => {
    await BOT.sendMessage(
        chat.id,
        `
Шпаргалка: \n
1кг = 1000гр, \n
1м = 100см, \n
1дм = 10см, \n
1см = 10мм, \n
1сутки (1 день) = 24часа, \n
1час = 60мин, \n
1мин = 60с
    `
    );
};

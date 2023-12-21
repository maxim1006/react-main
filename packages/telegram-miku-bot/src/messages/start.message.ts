import { BOT } from '../constants/bot.constants';
import { getRandomImagePath } from '../utils/image.utils';
import { MessageBaseModel } from '../models/message.model';
import { CommonEnum } from '../models/common.model';

export const handleStartMessages = async ({ chat, chat: { id, username } }: MessageBaseModel) => {
    await BOT.sendMessage(id, `Привет друг ${username}, меня зовут Хацуне Мику`);
    await BOT.sendMessage(id, `Как у тебя дела?`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Хорошо',
                        callback_data: CommonEnum.Good,
                    },
                    {
                        text: 'Нормально',
                        callback_data: CommonEnum.Normal,
                    },
                    {
                        text: 'Плохо',
                        callback_data: CommonEnum.Bad,
                    },
                ],
            ],
        },
    });
    await BOT.sendPhoto(id, getRandomImagePath());
};

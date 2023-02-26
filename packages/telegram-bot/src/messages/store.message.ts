import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleStoreMessages = async ({ chat, chat: { id, username } }: MessageBaseModel) => {
    await BOT.sendMessage(id, `Hello ${username}`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открой магазин',
                        web_app: { url: 'https://maximprosv.ru/' },
                    },
                ],
            ],
        },
    });
};

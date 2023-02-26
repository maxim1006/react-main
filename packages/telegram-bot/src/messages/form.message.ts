import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleFormMessages = async ({ chat: { id, username } }: MessageBaseModel) => {
    await BOT.sendMessage(id, `Hello ${username}`, {
        reply_markup: {
            keyboard: [
                [{ text: 'Пожалуйста заполни форму', web_app: { url: 'https://127.0.0.1:5173/' } }],
            ],
        },
    });
};

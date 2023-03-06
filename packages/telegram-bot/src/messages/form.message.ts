import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleFormMessages = async ({
    msg,
    chat: { id: chatId, username },
}: MessageBaseModel) => {
    await BOT.sendMessage(chatId, `Hello ${username}`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Пожалуйста заполни форму',
                        // сюда либо process.env.NGROK либо process.env.NETLIFY
                        web_app: { url: `${process.env.NGROK}form` },
                    },
                ],
            ],
        },
    });
};

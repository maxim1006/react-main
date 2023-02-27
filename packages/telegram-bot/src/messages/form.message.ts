import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleFormMessages = async ({ chat: { id, username } }: MessageBaseModel) => {
    await BOT.sendMessage(id, `Hello ${username}`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Пожалуйста заполни форму',
                        web_app: { url: 'https://235a-91-231-66-120.eu.ngrok.io/form' },
                    },
                ],
            ],
        },
    });
};

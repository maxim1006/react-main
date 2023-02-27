import { BOT } from '../constants/bot.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleStoreMessages = async ({ chat, chat: { id, username } }: MessageBaseModel) => {
    await BOT.sendMessage(id, `Hello ${username}`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открой магазин',
                        web_app: { url: 'https://235a-91-231-66-120.eu.ngrok.io/' },
                        // web_app: { url: 'https://lucent-cucurucho-7c0627.netlify.app/' },
                    },
                ],
            ],
        },
    });
};

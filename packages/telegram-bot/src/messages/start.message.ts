import { BOT } from '../constants/bot.constants';
import { getRandomImage } from '../utils/image.utils';
import { MessageBaseModel } from '../models/message.model';

export const handleStartMessages = async ({ chat, chat: { id, first_name } }: MessageBaseModel) => {
    await BOT.sendSticker(id, getRandomImage());
    await BOT.sendMessage(id, `Hello ${first_name}`);
};

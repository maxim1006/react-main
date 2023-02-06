import { BOT } from '../constants/bot.constants';
import { convertCommandsToStringList } from '../utils/common.utils';
import { COMMANDS } from '../constants/common.constants';
import { MessageBaseModel } from '../models/message.model';

export const handleInfoMessages = async ({ chat, msg }: MessageBaseModel) => {
    await BOT.sendMessage(chat.id, `Your username name is: ${msg?.from?.username}`);
    await BOT.sendMessage(chat.id, `Доступные команды ${convertCommandsToStringList(COMMANDS)} `);
};

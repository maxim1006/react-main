import { BOT } from '../constants/bot.constants';
import { convertCommandsToStringList } from '../utils/common.utils';
import { COMMANDS } from '../constants/common.constants';

export const handleUnknownCommandsMessages = async ({ chatId }: { chatId: number }) => {
    await BOT.sendMessage(chatId, `Не понимаю команду, доступные команды ${convertCommandsToStringList(COMMANDS)} `);
};

export const handleUnknownQueryCallbacksMessages = async ({ chatId }: { chatId: number }) => {
    await BOT.sendMessage(
        chatId,
        `Непонятная ошибка в handleUnknownQueryCallbacksMessages, пожалуйста выберите заново команду из стартового меню`
    );
};

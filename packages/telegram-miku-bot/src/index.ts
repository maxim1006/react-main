import { setBotCommands } from './utils/bot.utils';
import { BOT } from './constants/bot.constants';
import { BotEventsEnum } from './constants/bot-events.constants';
import { MessageEnum } from './models/message.model';
import { START_MESSAGE_MAP } from './constants/message.constants';
import {
    handleUnknownCommandsMessages,
    handleUnknownQueryCallbacksMessages,
} from './messages/unknown.message';
import { CommonEnum } from './models/common.model';

async function main() {
    // задаю меню
    await setBotCommands();

    BOT.on(BotEventsEnum.Message, async msg => {
        const {
            chat,
            chat: { id: chatId },
            text,
        } = msg;
        const username = chat.username;

        if (!username) return console.error('Error BotEventsEnum.Message Alarm ghost in town!!!');

        const mode = text as MessageEnum;

        // обработка стартовых messages
        if (START_MESSAGE_MAP[mode]) {
            return await START_MESSAGE_MAP[mode]({ chat, msg });
        }

        return await handleUnknownCommandsMessages({ chatId });
    });

    // обработка коллбеков по клику на кнопку (например Играть еще)
    await BOT.on(BotEventsEnum.CallbackQuery, async msg => {
        const chatId = msg.message?.chat.id;

        if (!chatId) return console.error('Error No chatId in callback_query');
        if (!msg.message) return console.error('Error No chatMessage in callback_query');

        const chat = msg.message.chat;
        const username = chat.username;

        if (!username)
            return console.error('Error BotEventsEnum.CallbackQuery Alarm ghost in town!!!');

        if (msg.data === CommonEnum.Good) {
            return await BOT.sendMessage(chatId, `У тебя отличное настроение, класс!`);
        }

        if (msg.data === CommonEnum.Normal) {
            return await BOT.sendMessage(chatId, `Нормально, тоже неплохо, все будет лучше!`);
        }

        if (msg.data === CommonEnum.Bad) {
            return await BOT.sendMessage(chatId, `Не беспокойся все проблемы мы решим!`);
        }

        return await handleUnknownQueryCallbacksMessages({ chatId });
    });
}

void main();

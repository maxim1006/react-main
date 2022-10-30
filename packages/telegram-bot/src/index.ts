import { setBotCommands } from './utils/bot.utils';
import { BOT } from './constants/bot.constants';
import {
    handleMathGameResultMessages,
    handleMathGameTaskMessages,
} from './messages/math-game.message';
import {
    handleUnknownCommandsMessages,
    handleUnknownQueryCallbacksMessages,
} from './messages/unknown.message';
import { BotEventsEnum } from './constants/bot-events.constants';
import { MESSAGE_MAP, MessageEnum, MessageTypesEnum } from './constants/message.constants';
import { CHATS_DB } from './db/db';
import { handleGuessNumberCbQuery } from './callback-queries/guess-number.callback-query';

async function main() {
    await setBotCommands();

    BOT.on(BotEventsEnum.Message, async msg => {
        const {
            chat,
            chat: { id: chatId },
            text,
        } = msg;

        if (MESSAGE_MAP[text as MessageEnum])
            return await MESSAGE_MAP[text as MessageEnum]({ chat, msg });

        if (CHATS_DB[chatId]?.type === MessageTypesEnum.Math)
            return await handleMathGameResultMessages({ chat, msg });

        return await handleUnknownCommandsMessages({ chatId });
    });

    await BOT.on(BotEventsEnum.CallbackQuery, async msg => {
        const chatId = msg.message?.chat.id;
        const data = msg.data;

        if (!chatId) return console.error('No chatId in callback_query');
        if (!msg.message) return console.error('No chatMessage in callback_query');

        const chat = msg.message.chat;

        if (CHATS_DB[chatId]?.type === MessageTypesEnum.GuessNumber)
            return await handleGuessNumberCbQuery({ data, chat });

        if (CHATS_DB[chatId]?.type === MessageTypesEnum.Math)
            return await handleMathGameTaskMessages({ chat });

        return await handleUnknownQueryCallbacksMessages({ chatId });
    });
}

void main();

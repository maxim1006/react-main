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
import { MESSAGE_MAP } from './constants/message.constants';
import { handleGuessNumberCbQuery } from './callback-queries/guess-number.callback-query';
import { getUserMode, setUser } from './db/user.db';
import { MessageEnum } from './models/message.model';

async function main() {
    await setBotCommands();

    BOT.on(BotEventsEnum.Message, async msg => {
        const {
            chat,
            chat: { id: chatId },
            text,
        } = msg;
        const firstName = chat.first_name;

        if (!firstName) return console.error('BotEventsEnum.Message Alarm ghost in town!!!');

        const mode = text as MessageEnum;

        // обработка стартовых messages
        if (MESSAGE_MAP[mode]) {
            // создаю пользователя (с проверкой на существование)
            await setUser({ firstName, mode });
            return await MESSAGE_MAP[text as MessageEnum]({ chat, msg });
        }

        // обработка messages в ходе игры
        const currentMode = await getUserMode({ firstName });
        if (currentMode === MessageEnum.MathGame)
            return await handleMathGameResultMessages({ chat, msg });

        return await handleUnknownCommandsMessages({ chatId });
    });

    await BOT.on(BotEventsEnum.CallbackQuery, async msg => {
        const chatId = msg.message?.chat.id;

        if (!chatId) return console.error('No chatId in callback_query');
        if (!msg.message) return console.error('No chatMessage in callback_query');

        const chat = msg.message.chat;
        const firstName = chat.first_name;

        if (!firstName) return console.error('BotEventsEnum.CallbackQuery Alarm ghost in town!!!');

        const mode = await getUserMode({ firstName });

        if (mode === MessageEnum.GuessNumber) return await handleGuessNumberCbQuery({ msg });
        if (mode === MessageEnum.MathGame) return await handleMathGameTaskMessages({ chat });

        return await handleUnknownQueryCallbacksMessages({ chatId });
    });
}

void main();

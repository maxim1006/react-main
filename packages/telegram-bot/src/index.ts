import './services/log.service';
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
import { START_MESSAGE_MAP } from './constants/message.constants';
import { handleGuessNumberCbQuery } from './callback-queries/guess-number.callback-query';
import { getUserMode, setUser } from './db/user.db';
import { MessageEnum } from './models/message.model';
import { handleClockGameCbQuery } from './callback-queries/clock-game.callback-query';
import { handleEnglishGameCbQuery } from './callback-queries/english-game.callback-query';
import './db/db-test';
import './web/server/server';

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
            // создаю пользователя (с проверкой на существование)
            await setUser({ username, mode });
            return await START_MESSAGE_MAP[mode]({ chat, msg });
        }

        // обработка messages в ходе игры
        const currentMode = await getUserMode({ username });

        if (currentMode === MessageEnum.MathGame)
            return await handleMathGameResultMessages({ chat, msg });

        return await handleUnknownCommandsMessages({ chatId });
    });

    // обработка коллбеков по клику на кнопку (например Играть еще)
    await BOT.on(BotEventsEnum.CallbackQuery, async msg => {
        const chatId = msg.message?.chat.id;

        if (!chatId) return console.error('Error No chatId in callback_query');
        if (!msg.message) return console.error('Error No chatMessage in callback_query');

        console.log({ msg });

        const chat = msg.message.chat;
        const username = chat.username;

        if (!username)
            return console.error('Error BotEventsEnum.CallbackQuery Alarm ghost in town!!!');

        // TODO сделать обработку ошибок при овернайт
        // if () {
        //     await BOT.sendMessage(chatId, `Пожалуйста выбери игру в меню`);
        // }

        const mode = await getUserMode({ username });

        if (mode === MessageEnum.GuessNumber) return await handleGuessNumberCbQuery({ msg });
        if (mode === MessageEnum.ClockGame) return await handleClockGameCbQuery({ msg });
        if (mode === MessageEnum.MathGame) return await handleMathGameTaskMessages({ chat });
        if (mode === MessageEnum.EnglishGame) return await handleEnglishGameCbQuery({ msg });

        return await handleUnknownQueryCallbacksMessages({ chatId });
    });
}

void main();

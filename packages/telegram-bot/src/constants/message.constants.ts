import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { Message } from 'node-telegram-bot-api';
import { handleStartMessages } from '../messages/start.message';
import { handleInfoMessages } from '../messages/info.message';
import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { handleMathGameTaskMessages } from '../messages/math-game.message';
import { handleStatsMessages } from '../messages/stats.message';
import { handleCheatSheetMessages } from '../messages/cheatsheet.message';
import { handleClockGameMessage } from '../messages/clock-game.message';
import { handleEnglishGameTaskMessages } from '../messages/english-game.message';
import { handleFormMessages } from '../messages/form.message';
import { handleStoreMessages } from '../messages/store.message';

export const START_MESSAGE_MAP: Record<
    MessageEnum,
    ({ chat, msg }: MessageBaseModel) => Promise<Message | void>
> = {
    // когда пользователь первый раз открыл бота и нажал на кнопку подключиться сработает /start
    [MessageEnum.Start]: ({ chat, msg }) => handleStartMessages({ chat }),
    [MessageEnum.Info]: ({ chat, msg }) => handleInfoMessages({ chat, msg }),
    [MessageEnum.Cheatsheet]: ({ chat, msg }) => handleCheatSheetMessages({ chat, msg }),
    [MessageEnum.ClockGame]: ({ chat, msg }) => handleClockGameMessage({ chat, msg }),
    [MessageEnum.MathGame]: ({ chat, msg }) => handleMathGameTaskMessages({ chat }),
    [MessageEnum.EnglishGame]: ({ chat, msg }) => handleEnglishGameTaskMessages({ chat }),
    [MessageEnum.GuessNumber]: ({ chat, msg }) => handleGuessNumberMessage({ chat, msg }),
    [MessageEnum.Stats]: ({ chat, msg }) => handleStatsMessages({ chat }),
    [MessageEnum.Form]: ({ chat, msg }) => handleFormMessages({ chat }),
    [MessageEnum.Store]: ({ chat, msg }) => handleStoreMessages({ chat }),
};

import { MessageBaseModel } from '../models/message.model';
import { Message } from 'node-telegram-bot-api';
import { handleStartMessages } from '../messages/start.message';
import { handleInfoMessages } from '../messages/info.message';
import { handleGuessNumberMessage } from '../messages/guess-number.message';
import { handleMathGameTaskMessages } from '../messages/math-game.message';

export enum MessageEnum {
    Start = '/start',
    Info = '/info',
    GuessNumber = '/guess_number',
    MathGame = '/math_game',
}

export enum MessageTypesEnum {
    Math = 'math',
    GuessNumber = 'guess number',
}

export const MESSAGE_MAP: Record<
    MessageEnum,
    ({ chat, msg }: MessageBaseModel) => Promise<Message | void>
> = {
    // когда пользователь первый раз открыл бота и нажал на кнопку подключиться сработает /start
    [MessageEnum.Start]: ({ chat, msg }) => handleStartMessages({ chat }),
    [MessageEnum.Info]: ({ chat, msg }) => handleInfoMessages({ chat, msg }),
    [MessageEnum.GuessNumber]: ({ chat, msg }) => handleGuessNumberMessage({ chatId: chat.id }),
    [MessageEnum.MathGame]: ({ chat, msg }) => handleMathGameTaskMessages({ chat }),
};

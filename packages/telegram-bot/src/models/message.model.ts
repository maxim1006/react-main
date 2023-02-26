import TelegramApi from 'node-telegram-bot-api';
import TelegramBot from 'node-telegram-bot-api';

export interface MessageBaseModel {
    chat: TelegramApi.Chat;
    msg?: TelegramApi.Message;
}

export interface CallbackMessageBaseModel {
    chat: TelegramApi.Chat;
    msg: TelegramBot.CallbackQuery;
}

export enum MessageEnum {
    Start = '/start',
    Info = '/info',
    Cheatsheet = '/cheatsheet',
    GuessNumber = '/guess_number',
    MathGame = '/math_game',
    EnglishGame = '/english_game',
    ClockGame = '/clock_game',
    Stats = '/stats',
    Form = '/form',
    Store = '/store',
}

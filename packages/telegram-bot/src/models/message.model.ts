import TelegramApi from 'node-telegram-bot-api';

export interface MessageBaseModel {
    chat: TelegramApi.Chat;
    msg?: TelegramApi.Message;
}

export enum MessageEnum {
    Start = '/start',
    Info = '/info',
    GuessNumber = '/guess_number',
    MathGame = '/math_game',
}

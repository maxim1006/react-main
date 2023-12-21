import TelegramApi from 'node-telegram-bot-api';

export interface MessageBaseModel {
    chat: TelegramApi.Chat;
    msg?: TelegramApi.Message;
}

export interface CallbackMessageBaseModel {
    chat: TelegramApi.Chat;
    msg: TelegramApi.CallbackQuery;
}

export enum MessageEnum {
    Start = '/start',
    // RockPaperScissorsGame = '/rockPaperScissorsGame',
}

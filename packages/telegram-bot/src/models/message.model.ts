import TelegramApi from 'node-telegram-bot-api';

export interface MessageBaseModel {
    chat: TelegramApi.Chat;
    msg?: TelegramApi.Message;
}

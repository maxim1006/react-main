import TelegramBot from 'node-telegram-bot-api';
import { CommonEnum } from './common.constants';

export const SEND_MESSAGE_OPTIONS_TRY_AGAIN: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [[{ text: 'Играть еще', callback_data: CommonEnum.PlayAgain }]],
    },
};

import TelegramBot from 'node-telegram-bot-api';

export enum CallbackGuessNumberDataEnum {
    GuessNumberAgain = 'guessNumber again',
}

export const SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Играть еще раз',
                    callback_data: CallbackGuessNumberDataEnum.GuessNumberAgain,
                },
            ],
        ],
    },
};

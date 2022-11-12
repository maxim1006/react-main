import TelegramBot from 'node-telegram-bot-api';

export enum CallbackPlayAgainEnum {
    GuessNumber = 'guessNumber again',
    ClockGame = 'clock game',
}

export const SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Играть еще раз',
                    callback_data: CallbackPlayAgainEnum.GuessNumber,
                },
            ],
        ],
    },
};

export const SEND_MESSAGE_OPTIONS_CLOCK_GAME_AGAIN: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Играть еще раз',
                    callback_data: CallbackPlayAgainEnum.ClockGame,
                },
            ],
        ],
    },
};

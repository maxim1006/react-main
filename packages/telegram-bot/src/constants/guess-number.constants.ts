import TelegramBot from 'node-telegram-bot-api';

export enum CallbackGuessNumberDataEnum {
    GuessNumberAgain = 'guessNumber again',
    GuessNumber0 = 'guessNumber 1',
    GuessNumber1 = 'guessNumber 1',
    GuessNumber2 = 'guessNumber 2',
    GuessNumber3 = 'guessNumber 3',
    GuessNumber4 = 'guessNumber 4',
    GuessNumber5 = 'guessNumber 5',
    GuessNumber6 = 'guessNumber 6',
    GuessNumber7 = 'guessNumber 7',
    GuessNumber8 = 'guessNumber 8',
    GuessNumber9 = 'guessNumber 9',
}

export const SEND_MESSAGE_OPTIONS_GUESS_NUMBER: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [
            // тут прикольно что кнопки будут в 1 ряд
            [
                { text: '1', callback_data: CallbackGuessNumberDataEnum.GuessNumber1 },
                { text: '2', callback_data: CallbackGuessNumberDataEnum.GuessNumber2 },
                { text: '3', callback_data: CallbackGuessNumberDataEnum.GuessNumber3 },
            ],
            [
                { text: '4', callback_data: CallbackGuessNumberDataEnum.GuessNumber4 },
                { text: '5', callback_data: CallbackGuessNumberDataEnum.GuessNumber5 },
                { text: '6', callback_data: CallbackGuessNumberDataEnum.GuessNumber6 },
            ],
            [
                { text: '7', callback_data: CallbackGuessNumberDataEnum.GuessNumber7 },
                { text: '8', callback_data: CallbackGuessNumberDataEnum.GuessNumber8 },
                { text: '9', callback_data: CallbackGuessNumberDataEnum.GuessNumber9 },
            ],
            [{ text: '0', callback_data: CallbackGuessNumberDataEnum.GuessNumber0 }],
        ],
    },
};

export const SEND_MESSAGE_OPTIONS_GUESS_NUMBER_AGAIN: TelegramBot.SendMessageOptions = {
    reply_markup: {
        inline_keyboard: [[{ text: 'Играть еще раз', callback_data: CallbackGuessNumberDataEnum.GuessNumberAgain }]],
    },
};

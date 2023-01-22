export enum CallbackPlayAgainEnum {
    GuessNumber = 'guessNumber again',
    ClockGame = 'clock game',
    EnglishGame = 'english game',
}

export function getPlayAgainMarkup(callback_data: CallbackPlayAgainEnum) {
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Играть еще раз',
                        callback_data,
                    },
                ],
            ],
        },
    };
}

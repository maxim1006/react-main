import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { addTodayGameToUser } from '../db/game.db';
import { BOT } from '../constants/bot.constants';
import { EnglishGameModule } from '../modules/english-game.module';
import { getRandomEnglishWord } from '../utils/english/english.utils';
import { EnglishGameEnum } from '../models/english-game.model';

export const handleEnglishGameTaskMessages = async ({
    chat,
    chat: { id: chatId },
}: MessageBaseModel) => {
    if (!chat.username)
        return console.error('Error handleEnglishGameTaskTypeMessages chat.username error');

    const userName = chat.username;
    const game = new EnglishGameModule().getRandomTask({ userName });

    const data = await addTodayGameToUser({
        gameType: MessageEnum.EnglishGame,
        username: userName,
        game,
    });

    if (!data)
        return console.error(
            'Error handleEnglishGameTaskTypeMessages addTodayGameToUser data error'
        );

    const task = game.task.value;

    switch (game.name) {
        case EnglishGameEnum.TranslateToRussian: {
            const answers = generateAnswers(data.gameId, task.value[0], userName);

            await BOT.sendMessage(
                chatId,
                `Пожалуйста переведи слово на русский слово: <b>${task.key}</b>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [answers.slice(0, 2), answers.slice(2)],
                    },
                }
            );
        }
    }

    // оставил для задач в которых сразу нужен ответ
    // return await BOT.sendMessage(chatId, getEnglishMessageData({ game }).message);
};

// helpers
function generateAnswers(gameId: string, answer: string, userName: string) {
    return [
        {
            text: answer,
            callback_data: `${gameId} correct`,
        },
    ]
        .concat(
            [...Array(3)].map(_ => {
                const randomWord = getRandomEnglishWordWithAnswer(answer, userName);
                const text = randomWord.value[0];

                return {
                    text,
                    callback_data: `${gameId}`,
                };
            })
        )
        .sort(() => 0.5 - Math.random());
}

function getRandomEnglishWordWithAnswer(answer: string, userName: string) {
    let randomWord = getRandomEnglishWord({ userName });

    while (randomWord.value[0] === answer) {
        randomWord = getRandomEnglishWord({ userName });

        if (randomWord.value[0] !== answer) break;
    }

    return randomWord;
}

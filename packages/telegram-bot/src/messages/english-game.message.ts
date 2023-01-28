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
    const game = new EnglishGameModule().getRandomTask();

    if (!chat.first_name)
        return console.error('Error handleEnglishGameTaskTypeMessages chat.firstName error');

    const data = await addTodayGameToUser({
        gameType: MessageEnum.EnglishGame,
        firstName: chat.first_name,
        game,
    });

    if (!data)
        return console.error(
            'Error handleEnglishGameTaskTypeMessages addTodayGameToUser data error'
        );

    const task = game.task.value;

    switch (game.name) {
        case EnglishGameEnum.TranslateToRussian: {
            const answers = generateAnswers(data.gameId, task.value[0]);

            await BOT.sendMessage(
                chatId,
                `Пожалуйста переведи слово на русский слово: <b>${task.key}</b>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [answers.slice(0, 3), answers.slice(3)],
                    },
                }
            );
        }
    }

    // оставил для задач в которых сразу нужен ответ
    // return await BOT.sendMessage(chatId, getEnglishMessageData({ game }).message);
};

// helpers
function generateAnswers(gameId: string, answer: string) {
    return [
        {
            text: answer,
            callback_data: `${gameId} correct`,
        },
    ]
        .concat(
            [...Array(5)].map(_ => {
                let randomWord = getRandomEnglishWord();

                while (randomWord.value[0] === answer) {
                    randomWord = getRandomEnglishWord();

                    if (randomWord.value[0] !== answer) break;
                }

                const text = randomWord.value[0];

                return {
                    text,
                    callback_data: `${gameId}`,
                };
            })
        )
        .sort(() => 0.5 - Math.random());
}

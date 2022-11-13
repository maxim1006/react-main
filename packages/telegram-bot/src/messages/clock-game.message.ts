import { BOT } from '../constants/bot.constants';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { addTodayGameToUser } from '../db/game.db';
import { getRandomClockImagePath } from '../utils/image.utils';
import { getRandomInteger } from '../utils/common.utils';
import { CLOCK_ANSWERS } from '../constants/clock-answers.constants';

export const handleClockGameMessage = async ({ msg }: MessageBaseModel) => {
    const firstName = msg?.chat?.first_name;
    const chatId = msg?.chat.id;

    if (!chatId) return console.error('handleClockGameMessage no chatId');
    if (!firstName) return console.error('handleClockGameMessage Alarm ghost in town!!!');

    const path = getRandomClockImagePath();
    const imageNumber = path.match(/(\d*).png/)?.[1] ?? '0';

    const data = await addTodayGameToUser({
        firstName,
        gameType: MessageEnum.ClockGame,
        game: { task: imageNumber },
    });

    if (!data) return console.error('handleClockGameMessage addTodayGameToUser data error');

    await BOT.sendMessage(chatId, `Пожалуйста выбери сколько показывают часы `, {
        reply_markup: {
            inline_keyboard: [generateClockAnswers(data.gameId, imageNumber)],
        },
    });
    await BOT.sendPhoto(chatId, path);
};

// helpers
function generateClockAnswers(gameId: string, imageNumber: string) {
    const answer = CLOCK_ANSWERS[imageNumber];
    const [h, m] = answer.split(':');

    return [
        {
            text: answer,
            callback_data: `${gameId} ${answer}`,
        },
    ]
        .concat(
            [...Array(3).keys()].map(i => {
                const randHours = getRandomInteger(0, 12);
                const randMins = getRandomInteger(0, 60);
                const randMins1 = getRandomInteger(0, 60);

                if (i === 0)
                    return {
                        text: `${randHours}:${m}`,
                        callback_data: `${gameId} ${randHours}:${m}`,
                    };

                if (i === 1)
                    return {
                        text: `${h}:${randMins}`,
                        callback_data: `${gameId} ${h}:${(randMins + '').padStart(2, '0')}`,
                    };

                return {
                    text: `${h}:${(randMins1 + '').padStart(2, '0')}`,
                    callback_data: `${gameId} ${h}:${(randMins1 + '').padStart(2, '0')}`,
                };
            })
        )
        .sort(() => 0.5 - Math.random());
}

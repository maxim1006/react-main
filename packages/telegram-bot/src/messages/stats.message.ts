import { BOT } from '../constants/bot.constants';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { getUserGameStatsByGameType } from '../db/user.db';

export const handleStatsMessages = async ({ chat, msg }: MessageBaseModel) => {
    if (!chat.username) return console.error('Error handleStatsMessages username error');

    const mathData = await getUserGameStatsByGameType({
        username: chat.username,
        gameType: MessageEnum.MathGame,
    });

    const englishData = await getUserGameStatsByGameType({
        username: chat.username,
        gameType: MessageEnum.EnglishGame,
    });

    await BOT.sendMessage(
        chat.id,
        `Твой прогресс по: \n
<b>Математике</b>: (всего сыграно / правильных ответов)
${mathData.gamesByMonthStr}
<b>Английскому</b>: (всего сыграно / правильных ответов)
${englishData.gamesByMonthStr}`,
        {
            parse_mode: 'HTML',
        }
    );
};

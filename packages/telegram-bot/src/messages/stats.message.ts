import { BOT } from '../constants/bot.constants';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { getUserGameStatsByGameType } from '../db/user.db';

export const handleStatsMessages = async ({ chat, msg }: MessageBaseModel) => {
    if (!chat.first_name) return console.error('Error handleStatsMessages firstName error');

    const mathData = await getUserGameStatsByGameType({
        firstName: chat.first_name,
        gameType: MessageEnum.MathGame,
    });

    const englishData = await getUserGameStatsByGameType({
        firstName: chat.first_name,
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

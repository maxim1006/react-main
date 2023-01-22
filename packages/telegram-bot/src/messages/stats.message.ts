import { BOT } from '../constants/bot.constants';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { getUserGameStatsByGameType } from '../db/user.db';

export const handleStatsMessages = async ({ chat, msg }: MessageBaseModel) => {
    if (!chat.first_name) return console.error('Error handleStatsMessages firstName error');

    const statsData = await getUserGameStatsByGameType({
        firstName: chat.first_name,
        gameType: MessageEnum.MathGame,
    });

    await BOT.sendMessage(chat.id, `Твой прогресс по Математике: \n ${statsData.gamesByMonthStr}`, {
        parse_mode: 'HTML',
    });
};

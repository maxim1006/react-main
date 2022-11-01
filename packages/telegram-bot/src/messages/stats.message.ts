import { BOT } from '../constants/bot.constants';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { getUserGameStatsByGameType } from '../db/user.db';

export const handleStatsMessages = async ({ chat, msg }: MessageBaseModel) => {
    if (!chat.username) return console.error('handleStatsMessages username error');

    const statsData = await getUserGameStatsByGameType({
        userName: chat.username,
        gameType: MessageEnum.MathGame,
    });

    await BOT.sendMessage(chat.id, `Твой прогресс по Математике: \n ${statsData.gamesByMonthStr}`, {
        parse_mode: 'HTML',
    });
};

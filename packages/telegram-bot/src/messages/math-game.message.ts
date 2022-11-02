import { BOT } from '../constants/bot.constants';
import { MathGameModule } from '../modules/math-game.module';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { HAPPY_EMOJI, SAD_EMOJI } from '../constants/emoji.constants';
import { SEND_MESSAGE_OPTIONS_TRY_AGAIN } from '../constants/message-options.constants';
import { getTodayLastMathGame, updateTodayLastMathGame } from '../db/math-game.db';
import { getTodayUserGameStatsByGameType } from '../db/user.db';
import { addTodayGameToUser } from '../db/game.db';
import { getMathMessageData } from '../utils/math/math-message.utils';

export const handleMathGameTaskMessages = async ({
    chat,
    chat: { id: chatId },
}: MessageBaseModel) => {
    const game = new MathGameModule().getRandomTask();

    if (!chat.first_name) return console.error('handleMathGameTaskMessages chat.firstName error');

    await addTodayGameToUser({ gameType: MessageEnum.MathGame, firstName: chat.first_name, game });

    return await BOT.sendMessage(chatId, getMathMessageData({ game }).message);
};

export const handleMathGameResultMessages = async ({
    chat,
    chat: { id: chatId },
    msg,
}: MessageBaseModel) => {
    const firstName = chat.first_name;

    if (!firstName) return console.error('handleMathGameResultMessages no firstName error');

    const game = await getTodayLastMathGame({ firstName });

    if (!game) return console.error('handleMathGameResultMessages no game error');

    const { task, answer } = game.data;

    if (answer)
        return await BOT.sendMessage(chatId, `Уже отвечал на этот вопрос, нажми "Играть еще"`);

    if (!msg?.text) return await BOT.sendMessage(chatId, `Пожалуйста введи ответ`);

    const handledUserAnswer = getMathMessageData({ game: game.data, userAnswer: msg.text }).answer;
    const isCorrect = task.result === handledUserAnswer;

    await updateTodayLastMathGame({
        firstName,
        data: {
            answer: {
                isCorrect,
                value: handledUserAnswer,
            },
        },
    });

    const stats = await getTodayUserGameStatsByGameType({
        gameType: MessageEnum.MathGame,
        firstName,
    });

    return sendCbMessage({
        chatId,
        emoji: isCorrect ? HAPPY_EMOJI : SAD_EMOJI,
        text: isCorrect
            ? `
Молодец! <b>${msg.text}</b> это правильный ответ
Сегодня сыграно <b>${stats.all}</b>, правильных ответов: <b>${stats.correct}</b>
              `
            : `Неверно, правильный ответ <b>${task.result}</b>`,
    });
};

// helpers
async function sendCbMessage({
    emoji,
    chatId,
    text,
}: {
    emoji: string;
    chatId: number;
    text: string;
}) {
    await BOT.sendMessage(chatId, emoji);
    return await BOT.sendMessage(chatId, text, {
        parse_mode: 'HTML',
        ...SEND_MESSAGE_OPTIONS_TRY_AGAIN,
    });
}

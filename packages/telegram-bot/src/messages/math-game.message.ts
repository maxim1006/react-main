import { BOT } from '../constants/bot.constants';
import { MATH_GAMES_SIGN_MAP } from '../constants/math-game.constants';
import { MathGameModule } from '../modules/math-game.module';
import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { HAPPY_EMOJI, SAD_EMOJI } from '../constants/emoji.constants';
import { SEND_MESSAGE_OPTIONS_TRY_AGAIN } from '../constants/message-options.constants';
import { getTodayLastMathGame, updateTodayLastMathGame } from '../db/math-game.db';
import { getTodayUserGameStatsByGameType } from '../db/user.db';
import { addTodayGameToUser } from '../db/game.db';

export const handleMathGameTaskMessages = async ({
    chat,
    chat: { id: chatId },
}: MessageBaseModel) => {
    const game = new MathGameModule().getRandomTask();

    if (!chat.username) return console.error('handleMathGameTaskMessages chat.username error');

    await addTodayGameToUser({ gameType: MessageEnum.MathGame, userName: chat.username, game });

    return await BOT.sendMessage(
        chatId,
        `Пожалуйста реши пример: ${game.task.part1} ${MATH_GAMES_SIGN_MAP[game.name]} ${
            game.task.part2
        } = `
    );
};

export const handleMathGameResultMessages = async ({
    chat,
    chat: { id: chatId },
    msg,
}: MessageBaseModel) => {
    const userName = chat.username;

    if (!userName) return console.error('handleMathGameResultMessages no userName error');

    const game = await getTodayLastMathGame({ userName });

    if (!game) return console.error('handleMathGameResultMessages no game error');

    const { task, answer } = game.data;

    if (answer)
        return await BOT.sendMessage(chatId, `Уже отвечал на этот вопрос, нажми "Играть еще"`);

    if (!msg?.text) return await BOT.sendMessage(chatId, `Пожалуйста введи числовой ответ`);

    const msgAnswer = Number(msg?.text);
    const isCorrect = task.result === msgAnswer;

    await updateTodayLastMathGame({
        userName,
        data: {
            answer: {
                isCorrect,
                value: msgAnswer,
            },
        },
    });

    const stats = await getTodayUserGameStatsByGameType({
        gameType: MessageEnum.MathGame,
        userName,
    });

    return sendCbMessage({
        chatId,
        emoji: isCorrect ? HAPPY_EMOJI : SAD_EMOJI,
        text: isCorrect
            ? `
Молодец! <b>${Number(msg?.text)}</b> это правильный ответ
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
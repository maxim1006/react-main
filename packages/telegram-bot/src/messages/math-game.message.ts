import { BOT } from '../constants/bot.constants';
import { CHATS_DB } from '../db/db';
import { MATH_GAMES_SIGN_MAP } from '../constants/math-game.constants';
import { MessageTypesEnum } from '../constants/message.constants';
import { MathGameModule } from '../modules/math-game.module';
import { MessageBaseModel } from '../models/message.model';
import { HAPPY_EMOJI, SAD_EMOJI } from '../constants/emoji.constants';
import { SEND_MESSAGE_OPTIONS_TRY_AGAIN } from '../constants/message-options.constants';
import { MathGameModel } from '../models/math-game.model';

export const handleMathGameTaskMessages = async ({ chat: { id: chatId } }: MessageBaseModel) => {
    const game = new MathGameModule().getRandomTask();

    CHATS_DB[chatId] = {
        type: MessageTypesEnum.Math,
        value: game,
    };

    return await BOT.sendMessage(
        chatId,
        `Пожалуйста реши пример: ${game.task.part1} ${MATH_GAMES_SIGN_MAP[game.name]} ${
            game.task.part2
        } = `
    );
};

export const handleMathGameResultMessages = async ({
    chat: { id: chatId },
    msg,
}: MessageBaseModel) => {
    const game = CHATS_DB[chatId].value as MathGameModel;
    const { task, answer } = game;

    if (answer)
        return await BOT.sendMessage(chatId, `Уже отвечал на этот вопрос, нажми "Играть еще"`);

    if (!msg?.text) return await BOT.sendMessage(chatId, `Пожалуйста введи числовой ответ`);

    const msgAnswer = Number(msg?.text);
    const isCorrect = task.result === msgAnswer;

    game.answer = {
        isCorrect,
        value: msgAnswer,
    };

    return sendCbMessage({
        chatId,
        emoji: isCorrect ? HAPPY_EMOJI : SAD_EMOJI,
        text: isCorrect
            ? `Молодец! <b>${Number(msg?.text)}</b> это правильный ответ`
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

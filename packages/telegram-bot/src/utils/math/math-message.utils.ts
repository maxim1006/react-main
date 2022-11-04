import { MathGameModel, MathGamesEnum } from '../../models/math-game.model';
import { MATH_GAMES_SIGN_MAP } from '../../constants/math-game.constants';

export const getMathMessageData = ({
    game,
    userAnswer,
}: {
    game: MathGameModel;
    userAnswer?: string;
}): {
    message: string;
    answer: number;
} => {
    const res = {
        message: `Пожалуйста реши пример: ${game.task.part1} ${MATH_GAMES_SIGN_MAP[game.name]} ${
            game.task.part2
        }`,
        answer: parseFloat(userAnswer?.match(/(\d+)/g)?.join('.') || ''),
    };

    switch (game.name) {
        case MathGamesEnum.ConvertToGrams: {
            res.message = `Пожалуйста переведи в граммы: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в г (например: 100г)`;
            break;
        }

        case MathGamesEnum.ConvertToKilos: {
            res.message = `Переведи в килограммы: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в кг и г (например: 1кг100г)`;
            break;
        }

        case MathGamesEnum.ConvertToCentimeters: {
            res.message = `Переведи в сантиметры: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в см (например: 100см)`;
            break;
        }

        case MathGamesEnum.SumMeters: {
            res.message = `Пожалуйста реши пример: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в м и см (например: 1м10см)`;
            break;
        }

        case MathGamesEnum.SumKilos: {
            res.message = `Пожалуйста реши пример: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в кг и г (например: 1кг100г)`;

            const groups = userAnswer?.match(/(\d+)/g);

            // добавляю 0 перед 2х значным числом и 00 перед однозначным, так как ответ может быть 1кг2г
            if (Array.isArray(groups) && groups[1]) {
                if (groups[1].length === 1 && +groups[1] < 10) {
                    groups[1] = '00' + groups[1];
                } else if (groups[1].length == 2 && +groups[1] < 100) {
                    groups[1] = '0' + groups[1];
                }
            }

            res.answer = parseFloat(groups?.join('.') || '');
            break;
        }
    }

    return res;
};

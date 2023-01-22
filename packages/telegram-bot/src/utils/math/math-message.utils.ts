import { MathGameModel, MathGameEnum } from '../../models/math-game.model';
import { MATH_GAMES_SIGN_MAP } from '../../constants/math-game.constants';
import { getRandomItemFromArray } from '../common.utils';

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
        case MathGameEnum.ConvertToGrams: {
            res.message = `Пожалуйста переведи в граммы: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в г (например: 100г)`;
            break;
        }

        case MathGameEnum.ConvertToCentimeters: {
            res.message = `Переведи в сантиметры: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в см (например: 100см)`;
            break;
        }

        case MathGameEnum.SumMeters: {
            res.message = `Пожалуйста реши пример: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в ${getRandomItemFromArray([
                'м дм см (например: 1м2дм10см)',
                'м см (например: 1м10см)',
                'см (например: 110см)',
            ])}`;

            const groups = userAnswer?.match(/(\d+[\u0430-\u044fa-zA-Z]?[\u0430-\u044fa-zA-Z]?)/gi);

            res.answer =
                groups?.reduce((acc: number, cur: string) => {
                    if (/см|sm/gi.test(cur)) {
                        return acc + parseFloat(cur);
                    }
                    if (/дм|dm/gi.test(cur)) {
                        return acc + parseFloat(cur) * 10;
                    }
                    if (/м|m/gi.test(cur)) {
                        return acc + parseFloat(cur) * 100;
                    }

                    return acc + parseFloat(cur);
                }, 0) ?? 0;

            break;
        }

        case MathGameEnum.ConvertToKilos: {
            res.message = `Переведи в килограммы: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в кг и г (например: 1кг100г)`;

            const groups = userAnswer?.match(/(\d+)/g);

            addZerosToGrams(groups);

            res.answer = parseFloat(groups?.join('.') || '');

            break;
        }

        case MathGameEnum.SumKilos: {
            res.message = `Пожалуйста реши пример: ${game.task.part1} ${
                MATH_GAMES_SIGN_MAP[game.name]
            } ${game.task.part2}, ответ напиши в кг и г (например: 1кг100г)`;

            const groups = userAnswer?.match(/(\d+)/g);

            addZerosToGrams(groups);

            res.answer = parseFloat(groups?.join('.') || '');
            break;
        }
    }

    return res;
};

// helpers
function addZerosToGrams(groups: RegExpMatchArray | null | undefined) {
    // добавляю 0 перед 2х значным числом и 00 перед однозначным, так как ответ может быть 1кг2г
    if (Array.isArray(groups) && groups[1]) {
        if (groups[1].length === 1) {
            groups[1] = '00' + groups[1];
        } else if (groups[1].length == 2) {
            groups[1] = '0' + groups[1];
        }
    }
}

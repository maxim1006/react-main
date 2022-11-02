import { getRandomInteger } from '../utils/common.utils';
import {
    MATH_GAMES_SIGN_MAP,
    MAX_DIVISION_INTEGER,
    MAX_MULTIPLICATION_INTEGER,
    MAX_SUBTRACTION_INTEGER,
    MAX_SUM_INTEGER,
} from '../constants/math-game.constants';
import { MathGameModel, MathGamesEnum, MathGameTaskModel } from '../models/math-game.model';

export class MathGameModule {
    getRandomTask(): MathGameModel {
        // @ts-ignore
        const name = Object.keys(MATH_GAMES_SIGN_MAP)[
            getRandomInteger(0, Object.keys(MATH_GAMES_SIGN_MAP).length - 1)
        ] as MathGamesEnum;

        const task = this[name]();

        return {
            name,
            task,
            timestamp: Date.now(),
        };
    }

    [MathGamesEnum.Sum](): MathGameTaskModel {
        const term1 = getRandomInteger(2, MAX_SUM_INTEGER);
        const term2 = getRandomInteger(2, MAX_SUM_INTEGER);
        const sum = term1 + term2;

        return {
            part1: term1,
            part2: term2,
            result: sum,
        };
    }

    [MathGamesEnum.SumMeters](): MathGameTaskModel {
        const term1 = getRandomInteger(0, 3);
        const term11 = getRandomInteger(1, 20);
        const term2 = getRandomInteger(0, 3);
        const term22 = getRandomInteger(1, 20);
        const sum = term1 * 100 + term11 + term2 * 100 + term22;

        return {
            part1: `${term1}м${term11}см`,
            part2: `${term2}м${term22}см`,
            result: sum / 100,
        };
    }

    [MathGamesEnum.SumKilos](): MathGameTaskModel {
        const term1 = getRandomInteger(0, 3);
        const term11 = +String(getRandomInteger(1, 10)).padEnd(getRandomInteger(2, 3), '0');
        const term2 = getRandomInteger(0, 3);
        const term22 = +String(getRandomInteger(1, 10)).padEnd(getRandomInteger(2, 3), '0');
        const sum = term1 * 1000 + term11 + term2 * 1000 + term22;

        return {
            part1: `${term1}кг${term11}г`,
            part2: `${term2}кг${term22}г`,
            result: sum / 1000,
        };
    }

    [MathGamesEnum.Subtraction](): MathGameTaskModel {
        const minuend = getRandomInteger(2, MAX_SUBTRACTION_INTEGER);
        let subtrahend = getRandomInteger(2, MAX_SUBTRACTION_INTEGER);

        while (subtrahend >= minuend) {
            subtrahend = getRandomInteger(2, MAX_SUBTRACTION_INTEGER);
        }

        const subtraction = minuend - subtrahend;

        return {
            part1: minuend,
            part2: subtrahend,
            result: subtraction,
        };
    }

    [MathGamesEnum.Multiplication](): MathGameTaskModel {
        const multiplier = getRandomInteger(2, MAX_MULTIPLICATION_INTEGER);
        const multiplicand = getRandomInteger(2, MAX_MULTIPLICATION_INTEGER);
        const product = multiplier * multiplicand;

        return {
            part1: multiplier,
            part2: multiplicand,
            result: product,
        };
    }

    [MathGamesEnum.IntegerDivision](): MathGameTaskModel {
        let numerator = 0;
        let denominator = 0;
        let fraction = 0.1;

        while ((fraction | 0) !== fraction) {
            numerator = getRandomInteger(2, MAX_DIVISION_INTEGER);
            denominator = getRandomInteger(2, MAX_DIVISION_INTEGER);

            fraction = numerator / denominator;
        }

        return {
            part1: numerator,
            part2: denominator,
            result: fraction,
        };
    }

    [MathGamesEnum.ConvertToGrams](): MathGameTaskModel {
        const term1 = getRandomInteger(0, 3);
        const term11 = +String(getRandomInteger(1, 10)).padEnd(getRandomInteger(2, 3), '0');

        return {
            part1: `${term1}кг${term11}г`,
            part2: '',
            result: term1 * 1000 + term11,
        };
    }

    [MathGamesEnum.ConvertToKilos](): MathGameTaskModel {
        const term1 = getRandomInteger(100, 5000);

        return {
            part1: `${term1}г`,
            part2: '',
            result: term1 / 1000,
        };
    }

    division() {
        const numerator = getRandomInteger(2, MAX_DIVISION_INTEGER);
        const denominator = getRandomInteger(2, MAX_DIVISION_INTEGER);
        const fraction = numerator / denominator;

        return fraction;
    }
}

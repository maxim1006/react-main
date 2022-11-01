import { getRandomInteger } from '../utils/common.utils';
import {
    MATH_GAMES,
    MAX_DIVISION_INTEGER,
    MAX_MULTIPLICATION_INTEGER,
    MAX_SUBTRACTION_INTEGER,
    MAX_SUM_INTEGER,
} from '../constants/math-game.constants';
import { MathGameModel, MathGamesEnum, MathGameTaskModel } from '../models/math-game.model';

export class MathGameModule {
    getRandomTask(): MathGameModel {
        const name = MATH_GAMES[getRandomInteger(0, MATH_GAMES.length - 1)];
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

    division() {
        const numerator = getRandomInteger(2, MAX_DIVISION_INTEGER);
        const denominator = getRandomInteger(2, MAX_DIVISION_INTEGER);
        const fraction = numerator / denominator;

        return fraction;
    }
}

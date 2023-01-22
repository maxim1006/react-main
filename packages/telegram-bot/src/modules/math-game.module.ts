import { getRandomInteger } from '../utils/common.utils';
import {
    MAX_DIVISION_INTEGER,
    MAX_MULTIPLICATION_INTEGER,
    MAX_SUBTRACTION_INTEGER,
    MAX_SUM_INTEGER,
} from '../constants/math-game.constants';
import { MathGameModel, MathGameEnum, MathGameTaskModel } from '../models/math-game.model';

export class MathGameModule {
    getRandomTask(): MathGameModel {
        const arr = [
            MathGameEnum.Sum,
            MathGameEnum.Subtraction,
            MathGameEnum.Multiplication,
            MathGameEnum.IntegerDivision,
            MathGameEnum.SumMeters,
            MathGameEnum.SumMeters,
            MathGameEnum.SumKilos,
            MathGameEnum.SumKilos,
            MathGameEnum.ConvertToGrams,
            MathGameEnum.ConvertToGrams,
            MathGameEnum.ConvertToKilos,
            MathGameEnum.ConvertToKilos,
            MathGameEnum.ConvertToCentimeters,
            MathGameEnum.ConvertToCentimeters,
        ];
        const name = arr[getRandomInteger(0, arr.length - 1)] as MathGameEnum;

        const task = this[name]();

        return {
            name,
            task,
            timestamp: Date.now(),
        };
    }

    [MathGameEnum.Sum](): MathGameTaskModel {
        const term1 = getRandomInteger(2, MAX_SUM_INTEGER);
        const term2 = getRandomInteger(2, MAX_SUM_INTEGER);
        const sum = term1 + term2;

        return {
            part1: term1,
            part2: term2,
            result: sum,
        };
    }

    [MathGameEnum.SumMeters](): MathGameTaskModel {
        const term1 = getRandomInteger(0, 3);
        const term11 = getRandomInteger(0, 10);
        const term111 = getRandomInteger(1, 20);
        const term2 = getRandomInteger(0, 3);
        const term22 = getRandomInteger(0, 10);
        const term222 = getRandomInteger(1, 20);
        const sum = term1 * 100 + term11 * 10 + term111 + term2 * 100 + term22 * 10 + term222;

        return {
            part1: `${term1}м${term11}дм${term111}см`,
            part2: `${term2}м${term22}дм${term222}см`,
            result: sum,
        };
    }

    [MathGameEnum.SumKilos](): MathGameTaskModel {
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

    [MathGameEnum.Subtraction](): MathGameTaskModel {
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

    [MathGameEnum.Multiplication](): MathGameTaskModel {
        const multiplier = getRandomInteger(2, MAX_MULTIPLICATION_INTEGER);
        const multiplicand = getRandomInteger(2, MAX_MULTIPLICATION_INTEGER);
        const product = multiplier * multiplicand;

        return {
            part1: multiplier,
            part2: multiplicand,
            result: product,
        };
    }

    [MathGameEnum.IntegerDivision](): MathGameTaskModel {
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

    [MathGameEnum.ConvertToGrams](): MathGameTaskModel {
        const term1 = getRandomInteger(0, 3);
        const term11 = +String(getRandomInteger(1, 10)).padEnd(getRandomInteger(2, 3), '0');

        return {
            part1: `${term1}кг${term11}г`,
            part2: '',
            result: term1 * 1000 + term11,
        };
    }

    [MathGameEnum.ConvertToKilos](): MathGameTaskModel {
        const term1 = getRandomInteger(100, 5000);

        return {
            part1: `${term1}г`,
            part2: '',
            result: term1 / 1000,
        };
    }

    [MathGameEnum.ConvertToCentimeters](): MathGameTaskModel {
        const term1 = getRandomInteger(1, 5);
        const term11 = getRandomInteger(0, 10);
        const term111 = getRandomInteger(0, 9);

        return {
            part1: `${term1}м${term11}дм${term111}см`,
            part2: '',
            result: term1 * 100 + term11 * 10 + term111,
        };
    }
}

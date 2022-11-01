import { MathGamesEnum } from '../models/math-game.model';

export const MAX_SUM_INTEGER = 50;
export const MAX_SUBTRACTION_INTEGER = 100;
export const MAX_MULTIPLICATION_INTEGER = 10;
export const MAX_DIVISION_INTEGER = 100;

export const MATH_GAMES = [
    MathGamesEnum.Sum,
    MathGamesEnum.Subtraction,
    MathGamesEnum.Multiplication,
    MathGamesEnum.IntegerDivision,
];

export const MATH_GAMES_SIGN_MAP = {
    [MathGamesEnum.Sum]: '+',
    [MathGamesEnum.Subtraction]: '-',
    [MathGamesEnum.Multiplication]: '*',
    [MathGamesEnum.IntegerDivision]: '/',
};

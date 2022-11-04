import { MathGamesEnum } from '../models/math-game.model';

export const MAX_SUM_INTEGER = 50;
export const MAX_SUBTRACTION_INTEGER = 100;
export const MAX_MULTIPLICATION_INTEGER = 10;
export const MAX_DIVISION_INTEGER = 100;

export const MATH_GAMES_SIGN_MAP = {
    [MathGamesEnum.Sum]: '+',
    [MathGamesEnum.SumMeters]: '+',
    [MathGamesEnum.SumKilos]: '+',
    [MathGamesEnum.Subtraction]: '-',
    [MathGamesEnum.Multiplication]: '*',
    [MathGamesEnum.IntegerDivision]: '/',
    [MathGamesEnum.ConvertToGrams]: '=',
    [MathGamesEnum.ConvertToKilos]: '=',
    [MathGamesEnum.ConvertToCentimeters]: '=',
};

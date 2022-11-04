import { AbstractGameModel } from './abstract-game.model';

export interface MathGameModel extends AbstractGameModel {
    name: MathGamesEnum;
    task: MathGameTaskModel;
    answer?: MathGameAnswerModel;
    timestamp: number;
}

export interface MathGameTaskModel {
    part1: number | string;
    part2: number | string;
    result: number | string;
}

export interface MathGameAnswerModel {
    isCorrect?: boolean;
    value?: number;
}

export enum MathGamesEnum {
    Sum = 'sum',
    Subtraction = 'subtraction',
    Multiplication = 'multiplication',
    IntegerDivision = 'integerDivision',
    SumMeters = 'sumMeters',
    SumKilos = 'sumKilos',
    ConvertToGrams = 'convertToGrams',
    ConvertToKilos = 'convertToKilos',
    ConvertToCentimeters = 'convertToCentimeters',
}

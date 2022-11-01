import { AbstractGameModel } from './abstract-game.model';

export interface MathGameModel extends AbstractGameModel {
    name: MathGamesEnum;
    task: MathGameTaskModel;
    answer?: MathGameAnswerModel;
    timestamp: number;
}

export interface MathGameTaskModel {
    part1: number;
    part2: number;
    result: number;
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
}

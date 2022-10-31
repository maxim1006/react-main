import { MathGamesEnum } from '../constants/math-game.constants';

export interface MathGameModel {
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

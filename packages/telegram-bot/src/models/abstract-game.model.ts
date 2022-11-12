import { MathGamesEnum } from './math-game.model';

export interface AbstractGameModel {
    name?: MathGamesEnum;
    answer?: AbstractGameAnswerModel;
    timestamp?: number;
}

export interface AbstractGameAnswerModel {
    isCorrect?: boolean;
    value?: number | string;
}

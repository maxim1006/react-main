import { AbstractGameModel } from './abstract-game.model';
import { WordModel } from './english.model';

export interface EnglishGameModel extends AbstractGameModel {
    task: EnglishGameTaskType;
    name: EnglishGameEnum;
    answer?: EnglishGameAnswerModel;
    timestamp: number;
}

export enum EnglishGameEnum {
    TranslateToRussian = 'translateToRussian',
    // TranslateToEnglish = 'translateToEnglish',
    // FillBlankSpace = 'fillBlankSpace',
    // FillEmptyLetter = 'fillEmptyLetter',
}

export interface EnglishGameAnswerModel {
    isCorrect?: boolean;
    value?: string[];
}

export interface EnglishGameTranslateWordTaskModel {
    value: WordModel;
}

export type EnglishGameTaskType = EnglishGameTranslateWordTaskModel;

export interface AbstractGameModel {
    answer?: AbstractGameAnswerModel;
    timestamp?: number;
}

export interface AbstractGameAnswerModel {
    isCorrect?: boolean;
    value?: number | string | string[];
}

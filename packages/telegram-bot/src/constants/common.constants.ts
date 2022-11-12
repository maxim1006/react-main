import { MessageEnum } from '../models/message.model';

export const COMMANDS = {
    [MessageEnum.Start]: 'приветствие',
    [MessageEnum.MathGame]: 'математика',
    [MessageEnum.ClockGame]: 'часы',
    [MessageEnum.GuessNumber]: 'покажет кнопки',
    [MessageEnum.Cheatsheet]: 'подсказки',
    [MessageEnum.Stats]: 'статистика игр',
    [MessageEnum.Info]: 'необходимая информация',
};

export enum CommonEnum {
    PlayAgain = 'play_again',
}

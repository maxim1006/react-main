import { MessageEnum } from '../models/message.model';

export const COMMANDS = {
    [MessageEnum.Start]: 'приветствие',
    [MessageEnum.MathGame]: 'математика',
    [MessageEnum.GuessNumber]: 'покажет кнопки',
    [MessageEnum.Stats]: 'статистика игр',
    [MessageEnum.Info]: 'необходимая информация',
};

export enum CommonEnum {
    PlayAgain = 'play_again',
}

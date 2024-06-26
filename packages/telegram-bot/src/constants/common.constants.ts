import { MessageEnum } from '../models/message.model';

export const COMMANDS = {
    [MessageEnum.Start]: 'приветствие',
    [MessageEnum.MathGame]: 'математика',
    [MessageEnum.EnglishGame]: 'английский',
    [MessageEnum.ClockGame]: 'часы',
    [MessageEnum.GuessNumber]: 'покажет кнопки',
    [MessageEnum.Cheatsheet]: 'подсказки',
    [MessageEnum.Stats]: 'статистика игр',
    [MessageEnum.Info]: 'необходимая информация',
    [MessageEnum.Form]: 'форма',
    [MessageEnum.Store]: 'магазин',
};

export enum CommonEnum {
    PlayAgain = 'play_again',
}

export const isProd = process.env.NODE_ENV === 'production';

console.log({ isProd, pId: process.pid });

import { MessageEnum } from '../models/message.model';

export const COMMANDS = {
    [MessageEnum.Start]: 'приветствие',
    // [MessageEnum.RockPaperScissorsGame]: 'камень ножницы бумага',
};

export enum CommonEnum {
    PlayAgain = 'play_again',
}

export const isProd = process.env.NODE_ENV === 'production';

console.log({ isProd, pId: process.pid });

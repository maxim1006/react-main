import * as crypto from 'crypto';
import { MathGameEnum } from '../constants/math-game.constants';
import { UserModel } from '../models/user.model';
import { MessageEnum } from '../models/message.model';
import { MathGameModel } from '../models/math-game.model';

export const USER_MATH_GAME_EXAMPLE = {
    name: MathGamesEnum.Sum,
    task: {
        part1: 20,
        part2: 20,
        result: 40,
    },
    answer: {
        isCorrect: true,
        value: 40,
    },
};

export const USER_DATA_EXAMPLE: UserModel = {
    dates: {
        [new Date().toISOString()]: {
            data: {
                games: {
                    [MessageEnum.MathGame]: {
                        [crypto.randomUUID()]: USER_MATH_GAME_EXAMPLE as MathGameModel,
                    },
                },
            },
        },
    },
    firstName: 'Max1',
};

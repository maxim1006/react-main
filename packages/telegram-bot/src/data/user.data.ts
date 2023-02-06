import * as crypto from 'crypto';
import { UserModel } from '../models/user.model';
import { MessageEnum } from '../models/message.model';
import { MathGameEnum, MathGameModel } from '../models/math-game.model';

export const USER_MATH_GAME_EXAMPLE = {
    name: MathGameEnum.Sum,
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
        [new Date().toISOString().split('T')[0]]: {
            data: {
                games: {
                    [MessageEnum.MathGame]: {
                        [crypto.randomUUID()]: USER_MATH_GAME_EXAMPLE as MathGameModel,
                    },
                },
            },
        },
    },
    username: 'Max1',
};

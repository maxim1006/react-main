import { GameTypeEnum } from '../models/game.model';
import crypto from 'crypto';
import { MathGamesEnum } from '../constants/math-game.constants';
import { UserModel } from '../models/user.model';
import { MathGameModel } from '../models/math-game.model';

export const USER_DATA_EXAMPLE: UserModel<MathGameModel> = {
    dates: {
        [new Date().toISOString()]: {
            data: {
                games: {
                    [GameTypeEnum.Math]: {
                        [crypto.randomUUID()]: {
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
                        },
                    },
                },
            },
        },
    },
    name: 'Max1',
};

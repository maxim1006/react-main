import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import * as crypto from 'crypto';
import { MessageEnum } from '../models/message.model';
import { GameType } from '../models/game.model';

export const addTodayGameToUser = async ({
    firstName,
    gameType,
    game,
}: {
    firstName: string;
    gameType: MessageEnum;
    game: GameType;
}) => {
    const userDocRef = await DB.doc(`users/${firstName}`);
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('Error addTodayGameToUser currentDay error');

    const gameId = crypto.randomUUID();

    await setDBDoc<UserModel>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        [gameType]: {
                            [gameId]: game,
                        },
                    },
                },
            },
        },
    });

    return {
        gameId,
    };
};

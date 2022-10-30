import { MathGameModel } from '../models/math-game.model';
import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { areDatesInSameDay } from '../utils/dates.utils';
import * as crypto from 'crypto';

export const addMathGameToUser = async ({
    userName,
    game,
}: {
    userName: string;
    game: MathGameModel;
}) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);

    const currentDay = Object.keys(userData.dates ?? {})?.find(isoDate =>
        areDatesInSameDay(new Date(isoDate), new Date())
    );

    if (!currentDay) return console.error('addMathGameToUser currentDay error');

    await setDBDoc<UserModel<MathGameModel>>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        math: {
                            [crypto.randomUUID()]: game,
                        },
                    },
                },
            },
        },
    });
};

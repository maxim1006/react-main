import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import * as crypto from 'crypto';
import { GuessNumberGameModel } from '../models/guess-number-game.model';
import { MessageEnum } from '../models/message.model';

export const addGuessNumberGameToUser = async ({
    userName,
    game,
}: {
    userName: string;
    game: GuessNumberGameModel;
}) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<GuessNumberGameModel>>(`users/${userName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('addGuessNumberGameToUser currentDay error');

    const gameId = crypto.randomUUID();

    await setDBDoc<UserModel<GuessNumberGameModel>>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        [MessageEnum.GuessNumber]: {
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

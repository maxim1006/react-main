import { MathGameModel } from '../models/math-game.model';
import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import * as crypto from 'crypto';
import { MessageEnum } from '../models/message.model';

export const addMathGameToUser = async ({
    userName,
    game,
}: {
    userName: string;
    game: MathGameModel;
}) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('addMathGameToUser currentDay error');

    await setDBDoc<UserModel<MathGameModel>>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        [MessageEnum.MathGame]: {
                            [crypto.randomUUID()]: game,
                        },
                    },
                },
            },
        },
    });
};

export const getCurrentLastMathGame = async <T>({
    userName,
}: {
    userName: string;
}): Promise<{
    gameId: string;
    data: MathGameModel;
} | void> => {
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);
    const today = getTodayDateByUserDataDates(userData);

    if (!userData.dates) return console.error('getCurrentMathGame no userData.dates');
    if (!today) return console.error('getCurrentMathGame today date error');

    const mathGames = userData.dates[today].data?.games[MessageEnum.MathGame];

    if (!mathGames) return console.error('getCurrentMathGame no math games error');

    const sortedMathGames = Object.entries(mathGames).sort(
        (a, b) => a[1].timestamp - b[1].timestamp
    );

    const lastGame = sortedMathGames.at(-1);

    if (!lastGame?.[0]) return console.error('getCurrentMathGame gameId error');
    if (!lastGame?.[1]) return console.error('getCurrentMathGame game data error');

    const [gameId, data] = lastGame;

    return {
        gameId,
        data,
    };
};

export const updateCurrentLastMathGame = async ({
    userName,
    data,
}: {
    userName: string;
    data: Partial<MathGameModel>;
}) => {
    const game = await getCurrentLastMathGame({ userName });
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('updateLastMathGame currentDay error');
    if (!game) return console.error('updateLastMathGame no game error');

    await setDBDoc<UserModel<MathGameModel>>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        [MessageEnum.MathGame]: {
                            [game.gameId]: {
                                ...game.data,
                                ...data,
                            },
                        },
                    },
                },
            },
        },
    });
};

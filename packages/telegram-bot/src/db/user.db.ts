import { UserModel } from '../models/user.model';
import { MathGameModel } from '../models/math-game.model';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import { DB } from './db';
import { MessageEnum } from '../models/message.model';

export const setUser = async ({
    firstName,
    userName,
    mode,
}: {
    firstName?: string;
    userName: string;
    mode: MessageEnum;
}) => {
    const userDocRef = await DB.doc(`users/${userName}`);

    await setDBDoc<UserModel>(userDocRef, {
        firstName,
        mode,
    });

    await addUserDate({ userName });
};

export const addUserDate = async ({ userName }: { userName: string }) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);

    if (!getTodayDateByUserDataDates(userData))
        await setDBDoc<UserModel>(userDocRef, {
            dates: {
                [new Date().toISOString()]: {
                    data: {
                        games: {},
                    },
                },
            },
        });
};

export const getUserMode = async ({
    userName,
}: {
    userName: string;
}): Promise<MessageEnum | void> => {
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);

    return userData.mode;
};

export const getTodayUserGameById = async <T>({
    userName,
    gameType,
    gameId,
}: {
    userName: string;
    gameType: MessageEnum;
    gameId: string;
}): Promise<T | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);
    const today = getTodayDateByUserDataDates(userData);

    if (!userData.dates) return console.error('getUserGameById no userData.dates');
    if (!today) return console.error('getUserGameById today date error');

    return userData.dates[today].data?.games[gameType]?.[gameId] as T;
};

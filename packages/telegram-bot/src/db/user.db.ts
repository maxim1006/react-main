import { UserModel } from '../models/user.model';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import { DB } from './db';
import { MessageEnum } from '../models/message.model';
import { GameModel } from '../models/game.model';

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
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);

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
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);

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

export const getUserGameStatsByGameType = async ({
    userName,
    gameType,
    period = 'year',
}: {
    userName: string;
    gameType: MessageEnum;
    period?: 'year';
}) => {
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);
    const gamesByMonth: Record<string, Record<string, Record<string, Partial<GameModel>>>> = {};
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    Object.entries(userData.dates ?? {}).forEach(([key, value]) => {
        const date = new Date(key);
        const month = date.getMonth();
        const year = date.getFullYear();
        const fullDateStr = months[month] + ' ' + year;

        if (!gamesByMonth[fullDateStr]) gamesByMonth[fullDateStr] = {};

        gamesByMonth[fullDateStr][key] = value.data?.games[gameType] ?? {};
    });

    const gamesByMonthStr = Object.entries(gamesByMonth)
        .map(([month, value]) => {
            return `<b>${month}</b>: \n ${Object.entries(value)
                .map(
                    ([dateDay, value]) =>
                        `${new Date(dateDay).toLocaleDateString()}: всего: <b>${
                            Object.keys(value).length
                        }</b>, правильных ответов: <b>${
                            Object.values(value).filter(i => i.answer?.isCorrect).length
                        }</b>`
                )
                .toString()} \n`;
        })
        .join(' ');

    console.log(gamesByMonth);
    console.log(gamesByMonthStr);

    return {
        gamesByMonth,
        gamesByMonthStr,
    };
};

export const getTodayUserGameStatsByGameType = async ({
    userName,
    gameType,
}: {
    userName: string;
    gameType: MessageEnum;
}): Promise<{ all: number; correct: number; error: number }> => {
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);
    const today = getTodayDateByUserDataDates(userData);

    const stats = {
        all: 0,
        correct: 0,
        error: 0,
    };

    if (!userData.dates) {
        console.error('getTodayUserGameStatsByGameType no userData.dates');
        return stats;
    }

    if (!today) {
        console.error('getTodayUserGameStatsByGameType today date error');
        return stats;
    }

    const games = userData.dates[today].data?.games[gameType];

    let all = 0,
        correct = 0;

    if (games) {
        all = Object.keys(games).length;
        correct = Object.values(games).filter(g => g.answer?.isCorrect).length;
    }

    return {
        all,
        correct,
        error: all - correct,
    };
};

import { UserModel } from '../models/user.model';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import { DB } from './db';
import { MessageEnum } from '../models/message.model';
import { GameType } from '../models/game.model';
import { MONTHS } from '../constants/date.constants';

export const setUser = async ({ username, mode }: { username?: string; mode: MessageEnum }) => {
    const userDocRef = await DB.doc(`users/${username}`);

    await setDBDoc<UserModel>(userDocRef, {
        username,
        mode,
    });

    if (!username) return console.error('Error setUser username error');

    await addUserDate({ username });
};

export const addUserDate = async ({ username }: { username: string }) => {
    const userDocRef = await DB.doc(`users/${username}`);
    const userData = await getDataByDocName<UserModel>(`users/${username}`);

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
    username,
}: {
    username: string;
}): Promise<MessageEnum | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${username}`);

    return userData.mode;
};

export const getTodayUserGameById = async <T extends GameType>({
    username,
    gameType,
    gameId,
}: {
    username: string;
    gameType: MessageEnum;
    gameId: string;
}): Promise<T | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${username}`);
    const today = getTodayDateByUserDataDates(userData);

    if (!userData.dates) return console.error('Error getUserGameById no userData.dates');
    if (!today) return console.error('Error getUserGameById today date error');

    return userData.dates[today].data?.games[gameType]?.[gameId] as T;
};

export const getUserGameStatsByGameType = async ({
    username,
    gameType,
    period = 'year',
}: {
    username: string;
    gameType: MessageEnum;
    period?: 'year';
}) => {
    const userData = await getDataByDocName<UserModel>(`users/${username}`);
    const gamesByMonth: Record<string, Record<string, Record<string, Partial<GameType>>>> = {};

    Object.entries(userData.dates ?? {}).forEach(([key, value]) => {
        const date = new Date(key);
        const month = date.getMonth();
        const year = date.getFullYear();
        const fullDateStr = MONTHS[month] + ' ' + year;

        if (!gamesByMonth[fullDateStr]) gamesByMonth[fullDateStr] = {};

        gamesByMonth[fullDateStr][key] = value.data?.games[gameType] ?? {};
    });

    const gamesByMonthSortedArr = Object.entries(gamesByMonth).sort(
        (a, b) => +new Date(a[0]) - +new Date(b[0])
    );
    const gamesByMonthStr = gamesByMonthSortedArr
        // 3 last month's stats
        .slice(gamesByMonthSortedArr.length - 3)
        .map(([date, value]) => {
            let correctAnswersInMonth = 0;

            return `\n<i>${date}</i>:\n${Object.entries(value)
                .sort((a, b) => +new Date(a[0]) - +new Date(b[0]))
                .map(([dateDay, value]) => {
                    let correctAnswerInDay = Object.values(value).filter(
                        i => i.answer?.isCorrect
                    ).length;
                    correctAnswersInMonth += correctAnswerInDay;

                    // В британском английском используется порядок день-месяц-год
                    return `${new Intl.DateTimeFormat('en-GB').format(new Date(dateDay))}: <b>${
                        Object.keys(value).length
                    } / ${correctAnswerInDay}</b>\n`;
                })
                .join('')}--------------------------------
правильных ответов: <b>${correctAnswersInMonth}</b>
                `;
        })
        .join(' ');

    return {
        gamesByMonth,
        gamesByMonthStr,
    };
};

export const getTodayUserGameStatsByGameType = async ({
    username,
    gameType,
}: {
    username: string;
    gameType: MessageEnum;
}): Promise<{ all: number; correct: number } | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${username}`);
    const today = getTodayDateByUserDataDates(userData);

    const stats = {
        all: 0,
        correct: 0,
    };

    if (!userData.dates)
        return console.error('Error getTodayUserGameStatsByGameType no userData.dates');
    if (!today) return console.error('Error getTodayUserGameStatsByGameType today date error');

    const games = userData.dates[today].data?.games[gameType];

    if (games) {
        stats.all = Object.keys(games).length;
        stats.correct = Object.values(games).filter(g => g.answer?.isCorrect).length;
    }

    return stats;
};

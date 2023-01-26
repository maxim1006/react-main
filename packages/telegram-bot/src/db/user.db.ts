import { UserModel } from '../models/user.model';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import { DB } from './db';
import { MessageEnum } from '../models/message.model';
import { GameType } from '../models/game.model';
import { MONTHS } from '../constants/date.constants';

export const setUser = async ({ firstName, mode }: { firstName?: string; mode: MessageEnum }) => {
    const userDocRef = await DB.doc(`users/${firstName}`);

    await setDBDoc<UserModel>(userDocRef, {
        firstName,
        mode,
    });

    if (!firstName) return console.error('Error setUser firstName error');

    await addUserDate({ firstName });
};

export const addUserDate = async ({ firstName }: { firstName: string }) => {
    const userDocRef = await DB.doc(`users/${firstName}`);
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);

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
    firstName,
}: {
    firstName: string;
}): Promise<MessageEnum | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);

    return userData.mode;
};

export const getTodayUserGameById = async <T extends GameType>({
    firstName,
    gameType,
    gameId,
}: {
    firstName: string;
    gameType: MessageEnum;
    gameId: string;
}): Promise<T | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
    const today = getTodayDateByUserDataDates(userData);

    if (!userData.dates) return console.error('Error getUserGameById no userData.dates');
    if (!today) return console.error('Error getUserGameById today date error');

    return userData.dates[today].data?.games[gameType]?.[gameId] as T;
};

export const getUserGameStatsByGameType = async ({
    firstName,
    gameType,
    period = 'year',
}: {
    firstName: string;
    gameType: MessageEnum;
    period?: 'year';
}) => {
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
    const gamesByMonth: Record<string, Record<string, Record<string, Partial<GameType>>>> = {};

    Object.entries(userData.dates ?? {}).forEach(([key, value]) => {
        const date = new Date(key);
        const month = date.getMonth();
        const year = date.getFullYear();
        const fullDateStr = MONTHS[month] + ' ' + year;

        if (!gamesByMonth[fullDateStr]) gamesByMonth[fullDateStr] = {};

        gamesByMonth[fullDateStr][key] = value.data?.games[gameType] ?? {};
    });

    const gamesByMonthStr = Object.entries(gamesByMonth)
        .sort((a, b) => +new Date(a[0]) - +new Date(b[0]))
        .slice(0, 3)
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
    firstName,
    gameType,
}: {
    firstName: string;
    gameType: MessageEnum;
}): Promise<{ all: number; correct: number } | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
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

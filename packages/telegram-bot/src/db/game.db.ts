import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import * as crypto from 'crypto';
import { MessageEnum } from '../models/message.model';
import { GameType } from '../models/game.model';
import { setUser } from './user.db';

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

    if (!currentDay) {
        // кейс когда пользователь овернайт решил продолжить
        await setUser({ firstName, mode: MessageEnum.Start });
        return console.error('Error addTodayGameToUser currentDay error');
    }

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

export const getTodayLastGameByType = async <T>({
    firstName,
    gameType,
}: {
    firstName: string;
    gameType: MessageEnum;
}): Promise<{
    gameId: string;
    data: GameType;
} | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
    const today = getTodayDateByUserDataDates(userData);

    if (!userData.dates) return console.error('Error getTodayLastGameByType no userData.dates');
    if (!today) return console.error('Error getTodayLastGameByType today date error');

    const games = userData.dates[today].data?.games[gameType];

    if (!games) return console.error('Error getTodayLastGameByType no games error');

    const sortedGames = Object.entries(games).sort(
        (a, b) => (a[1].timestamp ?? 0) - (b[1].timestamp ?? 0)
    );

    const lastGame = sortedGames.at(-1);

    if (!lastGame?.[0]) return console.error('Error getTodayLastGameByType gameId error');
    if (!lastGame?.[1]) return console.error('Error getTodayLastGameByType game data error');

    const [gameId, data] = lastGame;

    return {
        gameId,
        data,
    };
};

export const updateTodayLastGameByType = async ({
    firstName,
    data,
    gameType,
}: {
    firstName: string;
    gameType: MessageEnum;
    data: Partial<GameType>;
}) => {
    const game = await getTodayLastGameByType({ firstName, gameType });
    const userDocRef = await DB.doc(`users/${firstName}`);
    const userData = await getDataByDocName<UserModel>(`users/${firstName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('Error updateTodayLastGame currentDay error');
    if (!game) return console.error('Error updateTodayLastGame no game error');

    await setDBDoc<UserModel>(userDocRef, {
        dates: {
            [currentDay]: {
                data: {
                    games: {
                        [gameType]: {
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

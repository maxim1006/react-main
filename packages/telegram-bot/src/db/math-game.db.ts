import { MathGameModel } from '../models/math-game.model';
import { DB } from './db';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { UserModel } from '../models/user.model';
import { getTodayDateByUserDataDates } from '../utils/dates.utils';
import { MessageEnum } from '../models/message.model';

export const getTodayLastMathGame = async <T>({
    userName,
}: {
    userName: string;
}): Promise<{
    gameId: string;
    data: MathGameModel;
} | void> => {
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);
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
    } as {
        gameId: string;
        data: MathGameModel;
    };
};

export const updateTodayLastMathGame = async ({
    userName,
    data,
}: {
    userName: string;
    data: Partial<MathGameModel>;
}) => {
    const game = await getTodayLastMathGame({ userName });
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel>(`users/${userName}`);
    const currentDay = getTodayDateByUserDataDates(userData);

    if (!currentDay) return console.error('updateLastMathGame currentDay error');
    if (!game) return console.error('updateLastMathGame no game error');

    await setDBDoc<UserModel>(userDocRef, {
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

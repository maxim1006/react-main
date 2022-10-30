import { UserModel } from '../models/user.model';
import { MathGameModel } from '../models/math-game.model';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { areDatesInSameDay } from '../utils/dates.utils';
import { DB } from './db';
import { MessageEnum } from '../models/message.model';

export const setUser = async ({
    firstName,
    userName,
}: {
    firstName?: string;
    userName: string;
}) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userDocSnapshot = await userDocRef.get();

    if (!userDocSnapshot.exists) {
        await setDBDoc<UserModel>(userDocRef, {
            firstName,
        });
    }

    await addUserDate({ userName });
};

export const addUserDate = async ({ userName }: { userName: string }) => {
    const userDocRef = await DB.doc(`users/${userName}`);
    const userData = await getDataByDocName<UserModel<MathGameModel>>(`users/${userName}`);

    const existingDate = Object.keys(userData.dates ?? {})?.find(isoDate =>
        areDatesInSameDay(new Date(isoDate), new Date())
    );

    if (!existingDate)
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

    userData.mode;
};

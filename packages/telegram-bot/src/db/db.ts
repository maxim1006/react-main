// это аля симуляция БД
import { ChatDbModel } from '../models/chat-db.model';
import { UserModel } from '../models/user.model';
import { MathGameModel } from '../models/math-game.model';
import { areDatesInSameDay } from '../utils/dates.utils';
import { USER_DATA_EXAMPLE } from '../data/user.data';
import { getDataByDocName, setDBDoc } from '../utils/db.utils';
import { DB } from './db-initialize';

async function DBTest() {
    const userDocRef = await DB.doc('users/maximprosv1');

    const userData = await getDataByDocName<UserModel<MathGameModel>>('users/maximprosv1');

    const existingDate = Object.keys(userData.dates ?? {})?.find(isoDate =>
        areDatesInSameDay(new Date(isoDate), new Date())
    );

    if (!existingDate) await setDBDoc<UserModel<MathGameModel>>(userDocRef, USER_DATA_EXAMPLE);
}

void DBTest();

export const CHATS_DB: Record<string, ChatDbModel> = {};

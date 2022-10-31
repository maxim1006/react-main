import { UserModel } from '../models/user.model';

export const areDatesInSameDay = (date: Date, date1: Date) => {
    // date.toDateString() // Sun Oct 30 2022
    return date.toDateString() === date1.toDateString();
};

export const getTodayDateByUserDataDates = <T>(userData: UserModel<T>) =>
    Object.keys(userData.dates ?? {})?.find(isoDate =>
        areDatesInSameDay(new Date(isoDate), new Date())
    );

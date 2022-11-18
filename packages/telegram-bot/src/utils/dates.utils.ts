import { UserModel } from '../models/user.model';

export const areDatesInSameDay = (date: Date, date1: Date) => {
    // new Date().toDateString() // Sun Oct 30 2022
    return (
        date.getMonth() === date1.getMonth() &&
        date.getDate() === date1.getDate() &&
        date.getFullYear() === date1.getFullYear()
    );
};

export const getTodayDateByUserDataDates = (userData: UserModel) =>
    Object.keys(userData.dates ?? {})?.find(isoDate =>
        areDatesInSameDay(new Date(isoDate), new Date())
    );

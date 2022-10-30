export const areDatesInSameDay = (date: Date, date1: Date) => {
    // date.toDateString() // Sun Oct 30 2022
    return date.toDateString() === date1.toDateString();
};

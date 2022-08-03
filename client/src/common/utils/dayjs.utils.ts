import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import isoWeek from 'dayjs/plugin/isoWeek';
import { EN_LOCALE, RU_LOCALE } from '@app/constants/locales';

dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(isoWeek);

export function utcDate(dateStr: string): Dayjs {
    return dayjs.utc(dateStr);
}

export function calculateDurationInSeconds(time: number): number {
    return dayjs.duration(time).asSeconds();
}

export function isoWeekdayNow(day: number): Dayjs {
    return dayjs().isoWeekday(day);
}

export function importLocale(locale: string): void {
    if (locale !== EN_LOCALE) {
        switch (locale) {
            case RU_LOCALE:
                require('dayjs/locale/ru');
        }
    }
}

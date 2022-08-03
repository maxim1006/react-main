import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import dayjs from 'dayjs';
import { importLocale } from '@app/common/utils/dayjs.utils';
import { getCookie } from '@app/common/utils/cookies.utils';
import { EN_LOCALE, RU_LOCALE } from '@app/constants/locales';

export const LANGUAGE_COOKIE = 'LANGUAGE';
export const LOCALE_HASH_COOKIE = 'LOCALE_HASH';

const defaultLanguage = getCookie(LANGUAGE_COOKIE) || EN_LOCALE;
const localeHashCookieValue = getCookie(LOCALE_HASH_COOKIE);
const queryHashString = localeHashCookieValue ? `&hash=${localeHashCookieValue}` : '';
importLocale(defaultLanguage);
dayjs.locale(defaultLanguage.toLowerCase());

let supportedLanguages = [EN_LOCALE, RU_LOCALE] || [defaultLanguage];
void i18n
    .use(XHR)
    .use(initReactI18next)
    .init({
        lng: defaultLanguage,
        fallbackLng: defaultLanguage,
        supportedLngs: supportedLanguages,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            // убиться об стол но тут надо добавлять process.env.PUBLIC_URL
            loadPath: `${process.env.PUBLIC_URL}/localization/{{lng}}.json`,
        },
    });

export default i18n;

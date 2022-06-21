import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

const EN = 'en_US';
const RU = 'ru_RU';

const defaultLanguage = EN;

i18n.use(XHR)
    .use(initReactI18next)
    .init({
        lng: defaultLanguage,
        fallbackLng: defaultLanguage,
        supportedLngs: [EN, RU],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/localization/{{lng}}.json',
        },
    });

export default i18n;

export { EN, RU };

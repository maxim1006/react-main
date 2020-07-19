import i18n from "i18n-js";
import customAxios from "../../common/api/axios";

import translations from "../../i18n/translations/translations";

i18n.fallbacks = true;
i18n.translations = translations;
i18n.defaultLocale = "en";

export default i18n;

export const loadTranslations = async () => {
    await Promise.all(
        Object.keys(i18n.translations).map(async locale => {
            const { data } = await customAxios.get(`/translations/${locale}.json`);
            i18n.translations[locale] = {
                ...i18n.translations[locale],
                ...data
            };
        })
    );
};

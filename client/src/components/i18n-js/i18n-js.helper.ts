import i18n from "i18n-js";

import en from "../../i18n/translations/locales/en.json";

i18n.fallbacks = true;
// i18n.translations = translations;
i18n.translations = { en, ru: {} };
i18n.defaultLocale = "en";

export default i18n;

export const loadTranslations = async () => {
    await Promise.all(
        Object.keys(i18n.translations)
            .filter(key => key !== i18n.defaultLocale)
            .map(async locale => {
                const { default: data } = await import(`../../i18n/translations/locales/${locale}.json`);
                console.log(data);
                i18n.translations[locale] = {
                    ...i18n.translations[locale],
                    ...data
                };
            })
    );
};

loadTranslations();

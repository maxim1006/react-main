import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { EN, RU } from './i18n';

const Localization = memo(() => {
    const { t, i18n } = useTranslation();

    return (
        <button
            type="button"
            onClick={() => {
                i18n.changeLanguage(i18n.language === RU ? EN : RU);
            }}
        >
            {t('change_locale_from')} {i18n.language}
        </button>
    );
});

export default Localization;

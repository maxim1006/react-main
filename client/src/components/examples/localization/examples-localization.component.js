import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { EN, RU } from './i18n';

const ExamplesLocalizationComponent = () => {
    const { t, i18n } = useTranslation();

    return (
        <button
            type='primary'
            onClick={() => {
                i18n.changeLanguage(i18n.language === RU ? EN : RU);
            }}
        >
            {t('change_locale_from')} {i18n.language}
        </button>
    );
};

export default memo(ExamplesLocalizationComponent);

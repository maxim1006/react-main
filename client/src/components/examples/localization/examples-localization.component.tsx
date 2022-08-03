import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { EN_LOCALE, RU_LOCALE } from '@app/constants/locales';

const ExamplesLocalizationComponent = () => {
    const { t, i18n } = useTranslation();

    return (
        <button
            type='button'
            onClick={async () => {
                await i18n.changeLanguage(i18n.language === EN_LOCALE ? RU_LOCALE : EN_LOCALE);
            }}
        >
            {t('change_locale_from')} {i18n.language}
        </button>
    );
};

export default memo(ExamplesLocalizationComponent);

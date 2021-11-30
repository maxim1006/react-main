import React, { memo, useState } from 'react';
import i18n from './i18n-js.helper';
import I18nJsInnerComponent from './i18n-js-inner.component';
import i18nContext from '../../context/i18nContext';

/** @see https://github.com/fnando/i18n-js*/
// Сделал пример с иннер так как компоненты с мемо не будут обновляться при смене локали надоо использовать контекст
const I18nJsComponent: React.FC = () => {
    const [locale, setLocale] = useState(i18n.currentLocale());

    const setValue = (value: any) => {
        i18n.locale = value;
        setLocale(value);
    };

    i18n.locale = locale;

    return (
        <i18nContext.Provider value={{ i18n, setValue }}>
            <div>
                <button
                    type='button'
                    onClick={() => {
                        setLocale(locale === 'ru' ? 'en' : 'ru');
                    }}
                >
                    Change locale from {locale}
                </button>
            </div>
            <p>{i18n.t('browse')}</p>
            <p>{i18n.t('browse', { locale: 'ru' })}</p>
            <p>{i18n.t('complex.prop', { count: 10 })}</p>
            <p>{i18n.t('cancel')}</p>
            <p>{i18n.t('clear')}</p>

            <I18nJsInnerComponent />
        </i18nContext.Provider>
    );
};

export default memo(I18nJsComponent);

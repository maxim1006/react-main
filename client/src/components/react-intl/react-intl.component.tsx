import React, { memo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import translations from '../../i18n/translations/translations';
import ReactIntlChild from './react-intl-child.component';

const RU = 'ru';
const EN = 'en';
const LOCALE = 'locale';

const getFromLocalStorage = (itemName: any) => JSON.parse(localStorage.getItem(itemName) as string);
// const setToLocalStorage = (itemName, value) => localStorage.setItem(itemName, JSON.stringify(value));

const ReactIntlComponent: React.FC = () => {
    // пример подключения react-intl дико замороченный (надо 2 сета messages делать и все такое, полное г)
    const localeDefault = getFromLocalStorage(LOCALE);

    const [locale, setLocale] = useState(localeDefault === RU ? RU : EN);

    const messages: any = (translations as any)[locale];

    return (
        <>
            <button
                type='button'
                onClick={() => {
                    setLocale(currentLocale => (currentLocale === RU ? EN : RU));
                }}
            >
                Change locale from {locale}
            </button>
            <IntlProvider locale={locale} messages={messages}>
                <ReactIntlChild />
            </IntlProvider>
        </>
    );
};

export default memo(ReactIntlComponent);

import React from 'react';

const i18nContext = React.createContext<{ setValue: (value?: any) => void; i18n: any }>({
    setValue: () => {},
    i18n: {},
});

export default i18nContext;

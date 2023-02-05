import React from 'react';

const i18nContext = React.createContext<{ setValue: (value?: unknown) => void; i18n: unknown }>({
    setValue: () => {},
    i18n: {},
});

export default i18nContext;

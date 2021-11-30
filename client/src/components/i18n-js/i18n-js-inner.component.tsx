import React, { memo, useContext } from 'react';
import i18nContext from '../../context/i18nContext';

/** @see https://github.com/fnando/i18n-js */

const I18nJsInnerComponent: React.FC = () => {
    const { i18n } = useContext(i18nContext);

    return (
        <div>
            <h3>I18n Inner</h3>
            <p>{i18n.t('browse')}</p>
            <p>{i18n.t('browse', { locale: 'ru' })}</p>
            <p>{i18n.t('complex.prop', { count: 10 })}</p>
            <p>{i18n.t('cancel')}</p>
            <p>{i18n.t('clear')}</p>
        </div>
    );
};

export default memo(I18nJsInnerComponent);

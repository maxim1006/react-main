import styles from './app.module.scss';
import React, { FC, memo, useEffect } from 'react';
import TgHeaderContainer from '../tg-header/tg-header.container';
import { tg } from '@app/constants/common.constants';
import { useTg } from '@app/hooks/tg.hook';
import TgButton from '@app/components/tg-button/tg-button.component';
import { Navigate, Route, Routes } from 'react-router-dom';
import TgForm from '@app/components/tg-form/tg-form.component';
import TgShop from '@app/components/tg-shop/tg-shop.component';

type AppProps = {};

const App: FC<AppProps> = () => {
    const { onMainButtonToggle } = useTg();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className={styles.host}>
            <TgButton onClick={onMainButtonToggle}>Toggle Main Button</TgButton>
            <TgHeaderContainer />
            <Routes>
                <Route index element={<Navigate to='/shop' />} />
                <Route path='/shop' element={<TgShop />}></Route>
                <Route path='/form' element={<TgForm />}></Route>
            </Routes>
        </div>
    );
};

export default memo(App);

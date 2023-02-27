import styles from './app.module.scss';
import React, { FC, memo, useEffect } from 'react';
import TgHeaderContainer from '../tg-header/tg-header.container';
import { tg } from '@app/constants/common.constants';
import { useTg } from '@app/hooks/tg.hook';
import TgButton from '@app/components/tg-button/tg-button.component';
import { Route, Routes } from 'react-router-dom';
import ProductList from '@app/components/product/list/product-list.component';
import TgForm from '@app/components/tg-form/tg-form.component';

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
                <Route index element={<ProductList />}></Route>
                <Route path='/form' element={<TgForm />}></Route>
            </Routes>
        </div>
    );
};

export default memo(App);

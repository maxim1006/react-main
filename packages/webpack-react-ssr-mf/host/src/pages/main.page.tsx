import React, { memo } from 'react';
import { Route, Link } from 'react-router-dom';
import { HomeContainer } from '../components/home.container';
import { TestMfContainer } from '../components/test-mf.container';

import styles from './main-page.module.scss';

type MainPageProps = {};

const MainPage = memo<MainPageProps>(() => {
    return (
        <div className={'taMainPage'}>
            <Link className={styles.link} data-testid='main-link' to='/'>
                Main
            </Link>
            <Link className={styles.link} data-testid='about-link' to='/test-mf'>
                Test MF
            </Link>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/test-mf/' exact component={TestMfContainer} />
        </div>
    );
});

export { MainPage };

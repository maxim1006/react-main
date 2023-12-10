import React, { memo, FC } from 'react';
import styles from './app.module.scss';
import cn from 'classnames';
import CraExposedTitleClient from '../client/exposed-title/exposed-title.component';
import CraExposedTitle from '../server/exposed-title/exposed-title.component';

type AppProps = {};

const App: FC<AppProps> = () => {
    return (
        <div className={cn(styles.host, 'taApp')}>
            <CraExposedTitleClient />
            <CraExposedTitle />
        </div>
    );
};

export default memo(App);

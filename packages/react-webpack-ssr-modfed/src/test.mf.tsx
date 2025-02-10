import React, { FC } from 'react';
import styles from './test-mf.module.sass';
import cn from 'classnames';

type TestMfProps = {};

export const TestMf: FC<TestMfProps> = () => {
    return <div className={cn(styles.host, 'taTestMf')}>TestMf</div>;
};

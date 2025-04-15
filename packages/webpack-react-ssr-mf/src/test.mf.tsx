import React, { FC } from 'react';
import styles from './test-mf.module.sass';
import cn from 'classnames';

type TestMfProps = {
    prop: string;
};

const TestMfContainer = ({ prop }: TestMfProps) => {
    console.log('From Test mf');
    return <div className={cn(styles.host, 'taTestMf')}>TestMf 11 {prop}</div>;
};

export { TestMfContainer };

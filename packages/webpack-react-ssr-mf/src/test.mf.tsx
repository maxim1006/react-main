import React, { FC } from 'react';
import styles from './test-mf.module.sass';
import cn from 'classnames';

type TestMfProps = {
    prop: string;
};

const TestMf = ({ prop }: TestMfProps) => {
    return <div className={cn(styles.host, 'taTestMf')}>TestMf {prop}</div>;
};

export { TestMf };

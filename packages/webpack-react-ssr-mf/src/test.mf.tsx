import React from 'react';
import styles from './test-mf.module.sass';
import cn from 'classnames';
import Helmet from 'react-helmet';

type TestMfProps = {
    prop: string;
    Meta: typeof Helmet;
};

const TestMfContainer = ({ prop, Meta }: TestMfProps) => {
    console.log('From Test mf');
    return (
        <div className={cn(styles.host, 'taTestMf')}>
            <Meta>
                <title>Custom title</title>
                <meta name='description' content='Custom description' />
            </Meta>
            TestMf 11 {prop}
        </div>
    );
};

export { TestMfContainer };

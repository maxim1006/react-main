import React from 'react';
import styles from './test-mf.module.sass';
import cn from 'classnames';
import { HostComponents, useHost, KNOWN_ENVS } from '@max-test-mf/federated-host';

type TestMfProps = {
    prop: string;
};

const TestMfContainer = ({ prop }: TestMfProps) => {
    const ctx = useHost?.();

    console.log('From Test mf', {
        KNOWN_ENVS,
        ctx,
    });

    return (
        <div className={cn(styles.host, 'taTestMf')}>
            <HostComponents.Meta>
                <title>Custom title</title>
                <meta name='description' content='Custom description' />
            </HostComponents.Meta>
            TestMf 8 {prop}
            <p>
                <HostComponents.HostComponent1 prop='1' />
                <HostComponents.HostComponent2 prop='2' />
            </p>
        </div>
    );
};

export { TestMfContainer, type TestMfProps };

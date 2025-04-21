import React, { memo } from 'react';
import { loadRemote, registerRemotes, init } from '@module-federation/enhanced/runtime';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { remote } from '../utils/mf.utils';

type TestMfContainerProps = {};

const entry =
    'http://localhost:8007/test-public-path' +
    (typeof window === 'undefined' ? '/node/' : '/web/') +
    'remoteEntry.js' +
    `?${Date.now()}`;

registerRemotes(
    [
        {
            name: 'max_mf_test',
            entry,
        },
    ],
    { force: true },
);

init({
    name: 'hostApp',
    remotes: [
        {
            name: 'max_mf_test',
            entry,
        },
    ],
    shared: {
        react: {
            version: '^18.2.0',
            scope: 'default',
            lib: () => React,
            shareConfig: {
                singleton: true,
                requiredVersion: '^18.2.0',
            },
        },
        'react-dom': {
            version: '^18.2.0',
            scope: 'default',
            lib: () => ReactDOM,
            shareConfig: {
                singleton: true,
                requiredVersion: '^18.2.0',
            },
        },
    },
});

const TestMf = remote<import('@max-test-mf/mf-types/TestMf').TestMfProps>(
    'max_mf_test/TestMf',
    () =>
        loadRemote<React.ComponentType>('max_mf_test/TestMf').then(mod => ({
            default: mod['TestMfContainer'],
        })),
);

const TestMfContainer = memo<TestMfContainerProps>(() => {
    return (
        <div className={'taTestMfContainer'}>
            <TestMf prop='prop1' Meta={Helmet} />
        </div>
    );
});

export { TestMfContainer };

// примеры подключения
// const TestMf = remote('max_mf_test/TestMf', () =>
//     import('max_mf_test/TestMf' as any).then(mod => ({ default: mod.TestMf })),
// );
// const TestMf = React.lazy(
//     () => import('max_mf_test/TestMf' as any) as Promise<{ default: React.FC }>,
// );

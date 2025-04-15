import React from 'react';

import './index.module.sass';

import { loadRemote, registerRemotes, init } from '@module-federation/enhanced/runtime';

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
});

const TestMf = remote<{
    prop: string;
}>('max_mf_test/TestMf', () =>
    loadRemote<React.ComponentType>('max_mf_test/TestMf').then(mod => ({
        default: mod['TestMf'],
    })),
);

export const App = () => {
    return (
        <div className='App'>
            <TestMf prop='prop' />
            Hello world
        </div>
    );
};

// примеры подключения
// const TestMf = remote('max_mf_test/TestMf', () =>
//     import('max_mf_test/TestMf' as any).then(mod => ({ default: mod.TestMf })),
// );
// const TestMf = React.lazy(
//     () => import('max_mf_test/TestMf' as any) as Promise<{ default: React.FC }>,
// );

export function remote<P extends NonNullable<unknown>>(
    scope: string,
    factory: () => Promise<{ default: React.ComponentType<P> }>,
): React.ComponentType<P> & { preload: () => void } {
    const Component = React.lazy(factory) as unknown as React.ComponentType<P>;

    const result = function (props: P) {
        return (
            <React.Suspense fallback={<p>Loading...</p>}>
                <Component {...props} />
            </React.Suspense>
        );
    } as React.ComponentType<P> & { preload: () => void };

    return result;
}

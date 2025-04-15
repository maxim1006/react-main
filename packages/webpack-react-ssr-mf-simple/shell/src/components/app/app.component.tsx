import React from 'react';

import styles from './app.module.scss';

import { loadRemote, registerRemotes } from '@module-federation/enhanced/runtime';

// TODO пофиксить чтобы можно было не добавлять registerRemotes но при этом ловить изменения модулей
// без этого падает ошибка в ssr при изменении мф модуля
const entry =
    'http://localhost:8009' +
    (typeof window === 'undefined' ? '/node/' : '/web/') +
    'remoteEntry.js';

registerRemotes(
    [
        {
            name: 'Remote1Module',
            entry,
        },
    ],
    { force: true },
);

const Remote1MfContainer = remote<{
    prop: string;
}>('Remote1Module/Remote1Mf', () =>
    loadRemote<React.ComponentType>('Remote1Module/Remote1Mf').then(mod => ({
        default: (mod as any)['Remote1MfContainer'],
    })),
);

console.log({ Remote1MfContainer });

export const App = () => {
    return (
        <div className={styles.host}>
            Hello world <Remote1MfContainer prop='123' />
        </div>
    );
};

// helpers
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

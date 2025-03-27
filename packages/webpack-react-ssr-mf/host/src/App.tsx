import React from 'react';

import './index.module.sass';

// тоже что и remote
// const TestMf = React.lazy(
//     () => import('max_mf_test/TestMf' as any) as Promise<{ default: React.FC }>,
// );

const TestMf = remote('max_mf_test/TestMf', () =>
    import('max_mf_test/TestMf' as any).then(mod => ({ default: mod.TestMf })),
);

console.log({ TestMf });

export const App = () => {
    return (
        <div className='App'>
            <TestMf />
            Hello world
        </div>
    );
};

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

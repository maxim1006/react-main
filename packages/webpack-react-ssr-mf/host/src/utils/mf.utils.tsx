import React from 'react';

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

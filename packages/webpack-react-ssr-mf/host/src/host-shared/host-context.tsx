import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import type { HostContext } from '@max-test-mf/federated-host';

export const ctx = createContext<HostContext.IBaseContext | null>(null);

export const HostAPIProvider = ({ children }: { children: ReactNode }) => {
    const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

    const contextValue = useMemo<HostContext.IBaseContext>(
        () => ({
            hostAppName: 'max-test-mf-host',
            onError: () => undefined,
            themeType,
        }),
        [themeType],
    );

    return <ctx.Provider value={contextValue}>{children}</ctx.Provider>;
};

export function useHost<C extends HostContext.IBaseContext>(): C {
    return useContext(ctx) as C;
}

import React, { createContext, memo, useMemo } from 'react';
import { useSessionStorage } from './session-stoarage.hook';

export interface SessionStorageContextModel {
    sessionStorage: Record<string, any>;
    setSessionStorage: (prop: Record<string, any>) => void;
}
export const SessionStorageContext = createContext<SessionStorageContextModel>(null!);

type SessionStorageProviderProps = {
    children: React.ReactNode;
};

export const SessionStorageProvider = memo(({ children }: SessionStorageProviderProps) => {
    const [sessionStorage, setSessionStorage] = useSessionStorage();

    const value = useMemo(() => ({ sessionStorage, setSessionStorage }), [sessionStorage, setSessionStorage]);

    return <SessionStorageContext.Provider value={value}>{children}</SessionStorageContext.Provider>;
});

import { createContext, memo, useMemo } from 'react';
import { useSessionStorage } from '../../hooks/session-stoarage.hook';

export interface SessionStorageModel {
    value1?: string;
    value2?: string;
}

export interface SessionStorageContextModel {
    sessionStorage: SessionStorageModel;
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

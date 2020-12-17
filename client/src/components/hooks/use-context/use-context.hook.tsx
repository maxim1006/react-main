import React, { useCallback, useEffect, useMemo, useState } from 'react';
import customAxios from '../../../common/api/axios';

interface JSONPlaceholderTodo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

interface ContextHookModel {
    result?: JSONPlaceholderTodo;
    getInfo?: (number?: number) => Promise<void>;
    loading?: boolean;
}

export const UseContextHookContext = React.createContext<ContextHookModel>(null);

export const UseContextHookProvider = ({
    initData,
    children,
}: {
    initData: { number: number };
    children?: React.ReactNode;
}) => {
    console.log(123);
    const [result, setResult] = useState<JSONPlaceholderTodo>();
    const [loading, setLoading] = useState<boolean>();

    const getInfo = useCallback(
        async (number?: number) => {
            setLoading(true);

            try {
                const { data }: { data: JSONPlaceholderTodo } = await customAxios.get(
                    `https://jsonplaceholder.typicode.com/todos/${number ?? initData.number}`
                );
                setResult(data);
            } catch (e) {
                console.error('UseContextHookProvider getInfo error ', e);
            } finally {
                setLoading(false);
            }
        },
        [initData]
    );

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    const providerValue = useMemo(() => ({ result, getInfo, loading }), [loading, getInfo, result]);

    return <UseContextHookContext.Provider value={providerValue}>{children}</UseContextHookContext.Provider>;
};

export const UseContextHook = () => React.useContext(UseContextHookContext);

import React, { useCallback, useEffect, useState } from 'react';
import customAxios from '../../../common/api/axios';
import { TodoModel } from '@app/models/todo.model';

interface ExampleContextModel {
    result?: TodoModel;
    getInfo?: (number?: number) => Promise<void>;
    loading?: boolean;
}

export const ExampleContext = React.createContext<ExampleContextModel>({} as ExampleContextModel);

export const ExampleProvider = ({
    initData,
    children
}: {
    initData: { number: number };
    children?: React.ReactNode;
}) => {
    const [result, setResult] = useState<TodoModel>();
    const [loading, setLoading] = useState<boolean>();

    const getInfo = useCallback(
        async (number?: number) => {
            setLoading(true);

            try {
                const { data }: { data: TodoModel } = await customAxios.get(
                    `https://jsonplaceholder.typicode.com/todos/${number ?? initData.number}`
                );
                setResult(data);
            } catch (e) {
                console.error('UseHookProvider getInfo error ', e);
            } finally {
                setLoading(false);
            }
        },
        [initData]
    );

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    const providerValue = { result, getInfo, loading };

    return <ExampleContext.Provider value={providerValue}>{children}</ExampleContext.Provider>;
};

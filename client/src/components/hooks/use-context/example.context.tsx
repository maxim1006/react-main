import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import customAxios from '../../../common/api/axios';
import { TodoModel } from '@app/models/todo.model';

interface ExampleContextModel {
    result?: TodoModel;
    getInfo?: (number?: number) => Promise<void>;
    loading?: boolean;
}

export const ExampleContext = createContext<ExampleContextModel>({} as ExampleContextModel);

type ExampleProviderProps = { initData: { number: number }; children?: ReactNode };

export const ExampleProvider = ({ initData, children }: ExampleProviderProps) => {
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

// пример через обертку HOC
// export const withExampleProvider = <P extends Record<string, unknown>>(
//     Component: ComponentType<P>
// ): FC<P & ExampleProviderProps> =>
//     function withAppSettingsProvider({ portletId, ...props }) {
//         return (
//             <ExampleProvider initData={{ number: 1 }}>
//                 <Component {...(props as P)} />
//             </ExampleProvider>
//         );
//     };
//
// function WithExampleProviderTest() {
//     return <>Howdy</>;
// }
//
// const WithExampleProviderTestWrapper = withExampleProvider(WithExampleProviderTest);
//
// function WithExampleConsumer() {
//     return <WithExampleProviderTestWrapper initData={{ number: 2 }} />;
// }

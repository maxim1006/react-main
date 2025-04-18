import React, { useRef } from 'react';
import { suspenseData } from '@app/common/utils/promise.utils';

function InnerHocComponent<R>(
    props: Readonly<{
        task: () => Promise<R>;
        children: ({ result }: { result: R }) => React.ReactNode | null;
    }>,
) {
    const { children, task } = props;

    // можно так но лучше в suspense
    // const [result, setResult] = useState<R>(null as R);
    //
    // useEffect(() => {
    //     (async () => {
    //         setResult(await task());
    //     })();
    // }, [task]);

    const result = suspenseData('withPropsId', async () => {
        return await task();
    })();

    return <div>{children({ result })}</div>;
}

type THocComponentProps<R> = {
    children: (args: { result: R }) => React.ReactNode | null;
    refData: React.MutableRefObject<boolean>;
    fallback?: React.ReactNode;
};

export type THocWithPropsOptions<R, Props> = {
    task: (props: Props) => Promise<R>;
    ms: number;
};

function withProps<R, Props>(options: THocWithPropsOptions<R, Props>) {
    function HocComponent(props: Readonly<THocComponentProps<R>>) {
        const { children, fallback } = props;

        const { ms, task } = options;

        return (
            <React.Suspense fallback={fallback ?? <>withProps Fallback</>}>
                <InnerHocComponent task={() => task(ms as unknown as Props)}>{children}</InnerHocComponent>
            </React.Suspense>
        );
    }

    return function <OtherProps>(Component: React.ComponentType<OtherProps & { taskResult: R }>) {
        return (props: OtherProps & { fallback?: React.ReactNode }) => {
            const { fallback, ...rest } = props;

            const ref = useRef<boolean>(false);

            return (
                <HocComponent refData={ref} fallback={fallback} {...(rest as unknown as OtherProps)}>
                    {({ result }) => <Component taskResult={result} {...(rest as unknown as OtherProps)} />}
                </HocComponent>
            );
        };
    };
}

export { withProps };

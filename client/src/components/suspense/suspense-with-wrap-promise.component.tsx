import cn from 'classnames';
import React, { memo, Suspense } from 'react';
import { suspenseData } from '@app/common/utils/promise.utils';
import { delay } from '../../../../interviews/helpers';
import { ErrorBoundary } from '@app/components/error-boundary/error-boundary.component';

type SuspenseProps = {};

const CustomSuspense = memo<SuspenseProps>(() => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<>Fallback...</>}>
                <Child />
            </Suspense>
        </ErrorBoundary>
    );
});

function Child() {
    const task = suspenseData('id', async () => {
        return await delay(2000, 'From delay');
    })();

    return <div className={cn('taSuspense')}>Hello World {task}</div>;
}

export { CustomSuspense };

import cn from 'classnames';
import React, { memo } from 'react';
import { withProps } from '@app/components/HOC/with-props/with-props.hoc';

type HocWithPropsContainerProps = {};

const HocWithPropsContainer = memo<HocWithPropsContainerProps>(() => {
    return (
        <div className={cn('taHocWithPropsContainer')}>
            <WithPropsHook />
        </div>
    );
});

// Пример хока в который прокидываю пропсы и внутри еще для примера передаю их в компонент который оборачивает хок
const WithPropsHook = withProps({
    task: delay,
    ms: 3000,
})(WithPropsHookComponent);

function WithPropsHookComponent({ taskResult = '' }: { taskResult?: string }) {
    return <>WithPropsHookComponent {taskResult}</>;
}

export { HocWithPropsContainer };

// helpers
async function delay(ms: number): Promise<string> {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            console.log('delay is done in ', ms);
            res('Hello world');
        }, ms);
    });
}

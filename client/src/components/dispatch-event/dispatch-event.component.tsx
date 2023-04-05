import React, { FC, memo, useEffect, useRef } from 'react';

type DispatchEventProps = {};

const DispatchEvent: FC<DispatchEventProps> = () => {
    const ref = useRef<HTMLDivElement>(null!);

    window.addEventListener('resize', e => {
        console.log('window resize ', e);
    });
    window.dispatchEvent(new Event('resize'));

    window.addEventListener('onCustomEvent', (e: Event & { detail?: string }) => {
        console.log('onCustomEvent ', e.detail);
    });

    useEffect(() => {
        ref.current.addEventListener('click', () => {
            console.log('addEventListener click');
        });

        // реактовый хендлер не вызовет а вот кастомный, тот что выше сработает
        ref.current.dispatchEvent(new Event('click'));
    }, []);

    window.dispatchEvent(
        new CustomEvent('onCustomEvent', {
            detail: {
                prop: 'Detail prop',
            },
        })
    );

    return (
        <div ref={ref} onClick={() => console.log('onClick')}>
            test
        </div>
    );
};

export default memo(DispatchEvent);

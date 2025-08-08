import React, { memo, FC, useMemo, useCallback, useState, useRef } from 'react';
import { throttle, debounce } from 'lodash';

type ThrottleDebounceProps = {};

const DELAY = 1000;

const ThrottleDebounce: FC<ThrottleDebounceProps> = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    countRef.current = count;

    const throttleMemo = useMemo(() => {
        return throttle(
            () => {
                console.log('throttleMemo', new Date().toUTCString());
                setCount(countRef.current + 1);
                console.log('count', countRef.current);
            },
            DELAY,
            {
                leading: false,
            },
        );
    }, []);

    /* eslint-disable */ // так делать не надо но просто для примера
    const throttleCb = useCallback(
        throttle(
            () => {
                console.log('useCallback', new Date().toUTCString());
            },
            DELAY,
            {
                leading: false,
            },
        ),
        [],
    );

    const debounceMemo = useMemo(
        () =>
            debounce(() => {
                console.log('debounceMemo ', new Date().toUTCString());
            }, DELAY),
        [],
    );

    /* eslint-disable */ // так делать не надо но просто для примера что тоже работает
    const debounceCb = useCallback(
        debounce(() => {
            console.log('debounceCb ', new Date().toUTCString());
        }, DELAY),
        [],
    );

    return (
        <div
            onPointerMove={() => {
                throttleMemo();
                throttleCb();
                // debounceMemo();
                // debounceCb();
            }}
            style={{ width: 300, height: 300, background: 'blue' }}
        >
            ThrottleDebounce
        </div>
    );
};

export default memo(ThrottleDebounce);

import React, { memo, FC, useMemo, useCallback } from 'react';
import { throttle, debounce } from 'lodash';

type ThrottleDebounceProps = {};

const DELAY = 1000;

const ThrottleDebounce: FC<ThrottleDebounceProps> = () => {
    const throttleMemo = useMemo(
        () =>
            throttle(
                () => {
                    console.log('throttleMemo', new Date().toUTCString());
                },
                DELAY,
                {
                    leading: false,
                }
            ),
        []
    );

    const throttleCb = useCallback(
        throttle(
            () => {
                console.log('useCallback', new Date().toUTCString());
            },
            DELAY,
            {
                leading: false,
            }
        ),
        []
    );

    const debounceMemo = useMemo(
        () =>
            debounce(() => {
                console.log('debounceMemo ', new Date().toUTCString());
            }, DELAY),
        []
    );

    const debounceCb = useCallback(
        debounce(() => {
            console.log('debounceCb ', new Date().toUTCString());
        }, DELAY),
        []
    );

    return (
        <div
            onPointerMove={() => {
                throttleMemo();
                throttleCb();
                debounceMemo();
                debounceCb();
            }}
            style={{ width: 300, height: 300, background: 'blue' }}
        >
            ThrottleDebounce
        </div>
    );
};

export default memo(ThrottleDebounce);

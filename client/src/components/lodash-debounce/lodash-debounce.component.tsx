import React, { FC, memo } from 'react';
import { debounce } from 'lodash';

type LodashDebounceProps = {};

const LodashDebounce: FC<LodashDebounceProps> = () => {
    const handleClick = async () => {
        console.log('click');
        debouncedDelay(2000, 'debounce');
    };

    // сбрасывает счетчик debounce
    const handleDebounceCancel = async () => {
        console.log('cancel');
        debouncedDelay.cancel();
    };

    // если есть функция висящая в дебаунс то флаш сразу ее вызовет
    const handleDebounceFlush = async () => {
        console.log('flush');
        debouncedDelay.flush();
    };

    return (
        <div>
            <button onClick={handleClick}>Debounce</button>
            <button onClick={handleDebounceCancel}>Cancel</button>
            <button onClick={handleDebounceFlush}>Flush</button>
        </div>
    );
};

export default memo(LodashDebounce);

// helpers
const func = (ms: number, ...args: unknown[]) =>
    new Promise(res => {
        console.log('function init!');
        setTimeout(
            args => {
                console.log('timeout', args);
                res(args);
            },
            ms,
            args
        );
    });

const debouncedDelay = debounce(func, 2000, { leading: true, trailing: true });

import React, { memo, useState } from 'react';
import styles from './class-names.module.css';
import cn from 'classnames/bind';

type ClassNamesProps = {};

let cx = cn.bind(styles);

const ClassNames = memo<ClassNamesProps>(() => {
    const [state, setState] = useState<string>('base');

    // via css-modules 1
    let className = cx({
        base: true,
        accept: state === 'accept',
        error: state === 'error',
        disabled: state === 'disabled',
    });

    // via css-modules 2
    let className2 = cn({
        [styles.base]: true,
        [styles.accept]: state === 'accept',
        [styles.error]: state === 'error',
        [styles.disabled]: state === 'disabled',
    });

    // via css-modules 3
    let className3 = cn(
        `${styles.base}`,
        state === 'accept' && styles.accept,
        state === 'error' && styles.error,
        state === 'disabled' && styles.disabled,
    );

    return (
        <>
            <p>1</p>
            <p>
                <button onClick={() => setState('base')}>Base</button>
                <button onClick={() => setState('accept')}>Accept</button>
                <button onClick={() => setState('error')}>Error</button>
                <button onClick={() => setState('disabled')}>Disabled</button>
            </p>
            <div className={className}>ClassNames</div>
            <div className={className2}>ClassNames2</div>
            <div className={className3}>ClassNames3</div>
        </>
    );
});

export default ClassNames;

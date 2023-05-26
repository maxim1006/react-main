import React, { memo, FC, useEffect, useRef } from 'react';
import styles from './css-variable.module.scss';
import cn from 'classnames';

type CssVariableProps = {};

const CssVariable: FC<CssVariableProps> = () => {
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        ref.current.style.setProperty('--my-css-variable-from-css-padding', '10px 10px');
    }, []);

    return (
        <div ref={ref} className={cn(styles.host, 'taCssVariable')}>
            <div className={styles.fromCss}>fromCss</div>
            <div className={styles.toCss} style={{ padding: 'var(--my-css-variable-to-css-padding, 0 0)' }}>
                ToCss
            </div>
        </div>
    );
};

export default memo(CssVariable);

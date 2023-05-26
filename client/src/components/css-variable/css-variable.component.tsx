import React, { memo, FC } from 'react';
import styles from './css-variable.module.scss';
import cn from 'classnames';

type CssVariableProps = {};

const CssVariable: FC<CssVariableProps> = () => {
    return (
        <div className={cn(styles.host, 'taCssVariable')}>
            <div className={styles.fromCss}>fromCss</div>
            <div className={styles.toCss} style={{ padding: 'var(--my-css-variable-to-css-padding, 0 0)' }}>
                ToCss
            </div>
        </div>
    );
};

export default memo(CssVariable);

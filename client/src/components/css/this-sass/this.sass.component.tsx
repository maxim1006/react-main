import React, { memo, FC } from 'react';
import styles from './this-sass.module.scss';
import cn from 'classnames';

type ThisSassProps = {};

const ThisSass: FC<ThisSassProps> = () => {
    return (
        <div className={cn(styles.host, 'taThisSass')}>
            <div className={styles.hostInner}>This in sass</div>
        </div>
    );
};

export default memo(ThisSass);

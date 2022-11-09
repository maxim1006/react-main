import React, { memo, FC } from 'react';
import styles from './vmin-grid.module.scss';

type VminGridProps = {};

const VminGrid: FC<VminGridProps> = () => {
    return (
        <>
            <div className={styles.fullscreenBg} />
            <div className={styles.wrapper}>
                <div className={styles.grid} />
            </div>
        </>
    );
};

export default memo(VminGrid);

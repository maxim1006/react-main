import { memo } from 'react';
import styles from './vmin-grid.module.scss';

const VminGrid = () => {
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

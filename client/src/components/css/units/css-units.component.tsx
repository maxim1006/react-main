import React, { memo, FC } from 'react';
import styles from './css-units.module.scss';
import cn from 'classnames';

type CssUnitsProps = {};

const CssUnits: FC<CssUnitsProps> = () => {
    return (
        <div className={cn(styles.host, 'taCssUnits')}>
            <div className={styles.wrapper}>
                <div className={styles.box1}>width: 50vw; height: 50vh;</div>
                <div className={styles.box2}> width: 50vmin; height: 50vmax;</div>
                <div className={styles.box3}>writing-mode: vertical-lr; width: 50vi; height: 50vb;</div>
            </div>
            <div className={styles.mobileWrapper}>
                <div className={styles.mobileBox1} />
                <div className={styles.mobileBox2} />
                <div className={styles.mobileBox3} />
                <div className={styles.mobileBox4} />
            </div>
        </div>
    );
};

export default memo(CssUnits);

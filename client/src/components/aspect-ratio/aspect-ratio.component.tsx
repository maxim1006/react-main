import React, { memo, FC } from 'react';
import styles from './aspect-ratio.module.scss';

type MyAspectRatioProps = {};

const MyAspectRatio: FC<MyAspectRatioProps> = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.item} />
                <div className={styles.item} />
                <div className={styles.item} />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.item_1_2} />
                <div className={styles.item_1_2} />
                <div className={styles.item_1_2} />
            </div>
        </>
    );
};

export default memo(MyAspectRatio);

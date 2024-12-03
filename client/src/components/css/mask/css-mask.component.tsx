import React, { memo, FC } from 'react';
import styles from './css-mask.module.scss';

type MyCssMaskProps = {};

const MyCssMask: FC<MyCssMaskProps> = () => {
    return <div className={styles.mask} />;
};

export default memo(MyCssMask);

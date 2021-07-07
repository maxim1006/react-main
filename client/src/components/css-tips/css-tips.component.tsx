import React, { memo } from 'react';
import styles from './css-tips.module.scss';

type CssTipsProps = {};

const CssTips = memo<CssTipsProps>(() => {
    return (
        <>
            <div className={styles.fullAbsoluteBlock} />
        </>
    );
});

export default CssTips;

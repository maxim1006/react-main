'use client';

import React from 'react';
import styles from './exposed-title.module.css';

const CraExposedTitleClient = ({ text }: { text?: string }) => {
    console.log('+++');
    return <span className={styles.title}>CRA Client Title: {text}</span>;
};

export default CraExposedTitleClient;

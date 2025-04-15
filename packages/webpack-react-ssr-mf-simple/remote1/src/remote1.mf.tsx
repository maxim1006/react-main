import React from 'react';
import styles from './remote1-mf.module.sass';
import cn from 'classnames';

type Remote1MfProps = {
    prop: string;
};

const Remote1MfContainer = ({ prop }: Remote1MfProps) => {
    console.log('From Remote1 mf');
    return <div className={cn(styles.host, 'taRemote1Mf')}>Remote1Mf 6 {prop}</div>;
};

export { Remote1MfContainer };

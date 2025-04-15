import React from 'react';

type Remote1MfProps = {
    prop: string;
};

const Remote1Mf = ({ prop }: Remote1MfProps) => {
    console.log('From Test mf');
    return <div className='taRemote1Mf'>Remote1Mf {prop}</div>;
};

export { Remote1Mf };

import React, { FC, memo, useEffect, useState } from 'react';

type CommonErrorsUseEffectProps = {};

const CommonErrorsUseEffect: FC<CommonErrorsUseEffectProps> = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('#')
            .then(res => res.text())
            .then(res => {
                setState(res);
                // не надо делать еще 1 лишний useEffect, а лучше просто тут обработать
                console.log(res.slice(0, 10));
            });
    }, []);

    // bad плохо делать еще 1 useEffect, он не нужен
    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    return <></>;
};

export default memo(CommonErrorsUseEffect);

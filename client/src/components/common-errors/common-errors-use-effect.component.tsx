import { FC, memo, useEffect, useState } from 'react';

type CommonErrorsUseEffectProps = {};

const CommonErrorsUseEffect: FC<CommonErrorsUseEffectProps> = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, setState] = useState<string>();

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

    return null;
};

export default memo(CommonErrorsUseEffect);

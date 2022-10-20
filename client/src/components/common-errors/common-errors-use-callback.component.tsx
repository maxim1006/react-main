import React, { FC, memo, MouseEvent, useEffect, useState } from 'react';
import PlainButton from '@app/components/button/plain/plain-button.component';

type CommonErrorsUseCallbackProps = {};

const CommonErrorsUseCallback: FC<CommonErrorsUseCallbackProps> = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        // правильно записать реакцию на изменение стейта в отдельном useEffect, а не в коллбеке
        console.log(state);
    }, [state]);

    const adjustState = (num: number) => (e: MouseEvent<HTMLButtonElement>) => {
        // bad
        // setState(state + num);

        // good правильно всегда использовать предыдущий стейт так как если будет 2 setState то где-то по ходу движения потеряю стейт
        setState(prev => prev + num);

        // bad, правильно вынести в useEffect так как тут будет предыдущий стейт не проапдейченный так как setState асинхронный
        // console.log(state);
    };

    return (
        <>
            <PlainButton type='button' onClick={adjustState(1)}>
                Increase
            </PlainButton>
            {state}
            <PlainButton type='button' onClick={adjustState(-1)}>
                Decrease
            </PlainButton>
        </>
    );
};

export default memo(CommonErrorsUseCallback);

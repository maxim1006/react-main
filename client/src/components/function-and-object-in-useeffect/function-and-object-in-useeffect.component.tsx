import React, { memo, FC, useState, useEffect } from 'react';
import cn from 'classnames';

type FunctionAndObjectInUseeffectProps = {};

const FunctionAndObjectInUseeffect: FC<FunctionAndObjectInUseeffectProps> = () => {
    const [state, setState] = useState(0);

    // эту функцию и options стоит положить внутрь useEffect чтобы избежать ненужных зависимостей в useEffect
    // function createOptions() {
    //     return {
    //         state,
    //     };
    // }
    //
    // const options = { state };

    useEffect(() => {
        function createOptions() {
            return {
                state,
            };
        }

        const options = { state };

        console.log(createOptions());
        console.log(options);
        // положив в этот useEffect createOptions и options - убрал их из зависимостей и оставил только reactive переменную state (reactive - та которая реагирует на изменения, like props and state)
    }, [state]);

    return (
        <div
            onClick={() => {
                setState(i => ++i);
            }}
            className={cn('taFunctionAndObjectInUseeffect')}
        >
            FunctionAndObjectInUseeffect
        </div>
    );
};

export default memo(FunctionAndObjectInUseeffect);

import React, { memo, useState } from 'react';
import { useUpdateEffect } from '@app/hooks/update-effect.hook';

type UpdateEffectHookProps = {};

const UpdateEffectHook = memo<UpdateEffectHookProps>(function UpdateEffectHook() {
    const [count, setCount] = useState(10);
    useUpdateEffect(() => console.log(count), [count]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    );
});

export default UpdateEffectHook;

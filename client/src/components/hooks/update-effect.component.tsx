import React, { memo, useState } from 'react';
import { useUpdateEffect } from '@app/hooks/update-effect.hook';

type UpdateEffectProps = {};

const UpdateEffect = memo<UpdateEffectProps>(function UpdateEffect() {
    const [count, setCount] = useState(10);
    useUpdateEffect(() => console.log(count), [count]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    );
});

export default UpdateEffect;

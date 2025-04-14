import React, { memo, useState } from 'react';
import { useEventCallback } from '@app/hooks/use-event-callback.hook';

type UseEventCallbackProps = {};

const UseEventCallback = memo<UseEventCallbackProps>(() => {
    const [state, setState] = useState<number>(0);

    const increment = useEventCallback(() => {
        setState(i => ++i);
    });

    return (
        <div className='taUseEventCallback' onClick={increment}>
            UseEventCallback: {state}
        </div>
    );
});

export { UseEventCallback };

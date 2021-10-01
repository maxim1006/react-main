import React, { memo, useState } from 'react';
import { usePrevious } from '../../hooks/previous.hook';

type PreviousProps = {};

const Previous = memo<PreviousProps>(function Previous() {
    const [state, setState] = useState(0);
    const previous = usePrevious(state);

    return (
        <div>
            <button onClick={() => setState(i => ++i)}>Click</button>Current {state} Previous {previous}
        </div>
    );
});

export default Previous;

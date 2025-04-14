import cn from 'classnames';
import React, { memo } from 'react';

import { useToggle } from '@app/hooks/use-toggle.hook';
import { useDerivedState } from '@app/hooks/use-derived-state.hook';

type UseDeriveStateProps = {};

const UseDeriveState = memo<UseDeriveStateProps>(() => {
    const [value, toggle] = useToggle();
    return (
        <div className={cn('taUseDeriveState')}>
            <button type='button' onClick={toggle}>
                toggle
            </button>
            <UseDeriveStateChild value={value} />
        </div>
    );
});

function UseDeriveStateChild({ value }: { value: boolean }) {
    const [curValue, setCurValue] = useDerivedState(value);

    return (
        <div>
            <button type='button' onClick={() => setCurValue(i => !i)}>
                button
            </button>
            {String(curValue)}
        </div>
    );
}

export { UseDeriveState };

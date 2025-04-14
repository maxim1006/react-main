import cn from 'classnames';
import React, { memo } from 'react';

import { useToggle } from '@app/hooks/use-toggle.hook';

type UseToggleProps = {};

const UseToggle = memo<UseToggleProps>(() => {
    const [value, toggle, setValue] = useToggle();
    return (
        <div className={cn('taUseToggle')}>
            <button type='button' onClick={toggle}>
                toggle
            </button>
            <button type='button' onClick={() => setValue(false)}>
                set false
            </button>
            <button type='button' onClick={() => setValue(true)}>
                set true
            </button>
            {String(value)}
        </div>
    );
});

export { UseToggle };

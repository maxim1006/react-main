import React, { memo, useState } from 'react';
import { useDebouncedCallback } from '@app/hooks/use-debounced-callbacl.hook';

type UseDebouncedCallbackProps = {};

const DEBOUNCE_TIMEOUT = 500;

const UseDebouncedCallback = memo<UseDebouncedCallbackProps>(() => {
    const [value, setValue] = useState('');

    const debouncedSearch = useDebouncedCallback((query: string) => {
        console.log('Search by:', query);
    }, DEBOUNCE_TIMEOUT);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedSearch(newValue);
    };

    return (
        <div className='taUseDebouncedCallback'>
            <input type='text' placeholder='Search...' value={value} onChange={handleChange} />
        </div>
    );
});

export { UseDebouncedCallback };

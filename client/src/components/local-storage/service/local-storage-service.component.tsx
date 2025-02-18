import React, { memo, FC } from 'react';
import cn from 'classnames';
import { useLocalStorage as useLocalStorageService } from '@app/hooks/local-storage-service.hook';

type LocalStorageServiceProps = {};

const LocalStorageService: FC<LocalStorageServiceProps> = () => {
    return (
        <div className={cn('taLocalStorageService')}>
            <Child1 />
            <Child2 />
        </div>
    );
};

// helpers
function Child1() {
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    const [valueServiceObj, setValueService1] = useLocalStorageService<{ prop?: string }>('serviceObj');

    return (
        <>
            <h4>Child1</h4>
            <p>String</p>
            <input value={valueService || ''} onChange={e => setValueService(e.target.value)} type='text' />
            <p>Object</p>
            <input
                value={valueServiceObj?.prop || ''}
                onChange={e => setValueService1({ prop: e.target.value })}
                type='text'
            />
        </>
    );
}

function Child2() {
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    const [valueServiceObj, setValueService1] = useLocalStorageService<{ prop?: string }>('serviceObj');

    return (
        <>
            <h4>Child2</h4>
            <p>String2</p>
            <input value={valueService || ''} onChange={e => setValueService(e.target.value)} type='text' />
            <p>Object2</p>
            <input
                value={valueServiceObj?.prop || ''}
                onChange={e => setValueService1({ prop: e.target.value })}
                type='text'
            />
        </>
    );
}

export default memo(LocalStorageService);

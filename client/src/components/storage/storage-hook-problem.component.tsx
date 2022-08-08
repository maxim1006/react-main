import React, { memo, FC, Dispatch } from 'react';
import { useLocalStorage } from '@app/hooks/storage';
import { useLocalStorageService } from '@app/hooks/local-storage-service.hook';

type StorageHookProblemProps = {};

const StorageHookProblem: FC<StorageHookProblemProps> = () => {
    const [value, setValue] = useLocalStorage('prop1');

    return (
        <>
            <h3>Problem</h3>
            <p>Value changes in parent its ok</p>
            <input onChange={e => setValue(e.target.value)} type='text' />
            <Child1 parentProp={value} setValue={setValue} />
            <Child2 parentProp={value} setValue={setValue} />
        </>
    );
};

function Child1({ parentProp, setValue }: { parentProp: string; setValue: Dispatch<any> }) {
    const [valueInner, setValueInner] = useLocalStorage('prop1');
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    const [valueService1, setValueService1] = useLocalStorageService<{ prop?: string }>('service1');

    return (
        <div>
            <h3>Props in Child1</h3>
            <div>parentProp: {parentProp}</div>
            <div>
                changeParentProp also works: <input onChange={e => setValue(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueInner works only in component: {valueInner}</div>
            <div>
                changeValue1: <input onChange={e => setValueInner(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueService solves the problem: {valueService}</div>
            <div>
                valueService: <input onChange={e => setValueService(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueServiceObj: {valueService1?.prop}</div>
            <div>
                valueServiceObj: <input onChange={e => setValueService1({ prop: e.target.value })} type='text' />
            </div>
        </div>
    );
}
function Child2({ parentProp, setValue }: { parentProp: string; setValue: Dispatch<any> }) {
    const [valueInner, setValueInner] = useLocalStorage('prop1');
    const [valueService, setValueService] = useLocalStorageService<string>('service');
    const [valueService1, setValueService1] = useLocalStorageService<{ prop?: string }>('service1');

    return (
        <div>
            <h3>Props in Child2</h3>
            <div>parentProp: {parentProp}</div>
            <div>
                changeParentProp: <input onChange={e => setValue(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueInner works only in component: {valueInner}</div>
            <div>
                valueInner: <input onChange={e => setValueInner(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueService solves the problem: {valueService}</div>
            <div>
                valueService: <input onChange={e => setValueService(e.target.value)} type='text' />
            </div>
            <hr />
            <div>valueServiceObj: {valueService1?.prop}</div>
            <div>
                valueServiceObj: <input onChange={e => setValueService1({ prop: e.target.value })} type='text' />
            </div>
        </div>
    );
}

export default memo(StorageHookProblem);

import cn from 'classnames';
import React, { memo } from 'react';

import { useInitStore } from '@app/store/store-with-protected-actions/store-with-protected-actions';
import { Provider, useSelector } from 'react-redux';
import {
    storeWithProtectedActionsSelectorProp,
    storeWithProtectedActionsSelectorProp1,
} from '@app/store/store-with-protected-actions/store-with-protected-actions.selectors';

type StoreWithProtectedActionProps = {};

const StoreWithProtectedAction = memo<StoreWithProtectedActionProps>(() => {
    const store = useInitStore({}, { prop: 37, prop1: 'Max' });

    return (
        <Provider store={store}>
            <div className={cn('taStoreWithProtectedAction')}>
                <Inner />
            </div>
        </Provider>
    );
});

function Inner() {
    const prop = useSelector(storeWithProtectedActionsSelectorProp);
    const prop1 = useSelector(storeWithProtectedActionsSelectorProp1);

    return (
        <>
            {prop} {prop1}
        </>
    );
}

export { StoreWithProtectedAction };

import React, { memo, useContext } from 'react';
import { SessionStorageContext } from './session-stoarage.context';

type SessionStorageChild2Props = {};

const SessionStorageChild2 = memo<SessionStorageChild2Props>(() => {
    const { sessionStorage, setSessionStorage } = useContext(SessionStorageContext);

    return (
        <>
            <input
                type='text'
                onChange={e => {
                    setSessionStorage({
                        value2: e.target.value,
                    });
                }}
            />
            {sessionStorage?.value1}
        </>
    );
});

export default SessionStorageChild2;

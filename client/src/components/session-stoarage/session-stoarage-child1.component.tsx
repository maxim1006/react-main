import React, { memo, useContext } from 'react';
import { SessionStorageContext } from './session-stoarage.context';

type SessionStorageChild1Props = {};

const SessionStorageChild1 = memo<SessionStorageChild1Props>(() => {
    const { sessionStorage, setSessionStorage } = useContext(SessionStorageContext);

    return (
        <>
            <input
                type="text"
                onChange={e => {
                    setSessionStorage({
                        value1: e.target.value,
                    });
                }}
            />
            {sessionStorage.value2}
        </>
    );
});

export default SessionStorageChild1;

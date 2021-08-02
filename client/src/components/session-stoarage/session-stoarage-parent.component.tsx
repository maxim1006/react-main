import React, { memo } from 'react';
import SessionStorageChild1 from './session-stoarage-child1.component';
import { SessionStorageProvider } from './session-stoarage.context';
import SessionStorageChild2 from './session-stoarage-child2.component';

type SessionStorageParentProps = {};

const SessionStorageParent = memo<SessionStorageParentProps>(() => {
    return (
        <SessionStorageProvider>
            <SessionStorageChild1 />
            <SessionStorageChild2 />
        </SessionStorageProvider>
    );
});

export default SessionStorageParent;

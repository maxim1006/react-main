import React, { memo } from 'react';
import useFirestoreFamily from '../../hooks/useFirestoreFamily';
import MaterialLoader from '../../loader/MaterialLoader';
import { StyledFirestoreFamilyList } from './StyledFirestoreFamily';

export default memo(() => {
    const family = useFirestoreFamily();

    return family ? (
        <StyledFirestoreFamilyList>
            {family.map(({ name, age }, index) => (
                <li key={index}>
                    Name:
                    {name}
                    age:
                    {age}
                </li>
            ))}
        </StyledFirestoreFamilyList>
    ) : (
        <MaterialLoader />
    );
});

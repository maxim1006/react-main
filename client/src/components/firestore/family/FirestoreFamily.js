import { memo } from 'react';
import useFirestoreFamily from '../../hooks-components/useFirestoreFamily';
import MaterialLoader from '../../loader/MaterialLoader';
import { StyledFirestoreFamilyList } from './StyledFirestoreFamily';

export default memo(() => {
    const family = useFirestoreFamily();

    return family ? (
        <StyledFirestoreFamilyList>
            {family.map(({ name, age }) => (
                <li key={crypto.randomUUID()}>
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

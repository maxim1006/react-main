import React, { memo, FC } from 'react';
import { FamilyMemberModel } from '@app/models/family.model';

type FamilyListProps = {
    family: FamilyMemberModel[];
};

const FamilyList: FC<FamilyListProps> = ({ family }) => {
    return (
        <ul>
            {family &&
                family.map(({ name, age }) => (
                    <li key={crypto.randomUUID()}>
                        Name:
                        {name}
                        age:
                        {age}
                    </li>
                ))}
        </ul>
    );
};

export default memo(FamilyList);

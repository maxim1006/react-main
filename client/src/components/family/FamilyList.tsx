import { memo } from 'react';

type FamilyListProps = { family: { name: string; age: number }[] };

const FamilyList = memo<FamilyListProps>(function FamilyList({ family }) {
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
});

export default FamilyList;
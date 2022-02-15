import { FC, memo } from 'react';

type MonsterItemProps = {
    name: string;
};

const MonsterItem: FC<MonsterItemProps> = ({ name }) => {
    return <>{name}</>;
};

export default memo(MonsterItem);

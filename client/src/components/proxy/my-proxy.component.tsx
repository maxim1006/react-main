import React, { memo, FC } from 'react';

export enum ComponentTypeEnum {
    Test = 'test',
}

export const COMPONENTS_DESCRIPTORS: Record<ComponentTypeEnum, { component: FC | null }> = {
    [ComponentTypeEnum.Test]: {
        component: () => <ChildComp />,
    },
};

// usage
const ChildContainer: FC<{}> = () => {
    const Child = COMPONENTS_DESCRIPTORS.test.component;

    return <Child />;
};

// Child
const Child: FC<{}> = () => {
    return <div>Child</div>;
};

const ChildComp = memo(Child);

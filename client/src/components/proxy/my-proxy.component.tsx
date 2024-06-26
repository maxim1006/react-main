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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChildContainer: FC<{}> = () => {
    const Child = COMPONENTS_DESCRIPTORS.test.component;

    if (!Child) return null;

    return <Child />;
};

// Child
const Child: FC<{}> = () => {
    return <div>Child</div>;
};

const ChildComp = memo(Child);

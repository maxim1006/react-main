import React, { memo, FC, ReactNode } from 'react';
import cn from 'classnames';

type ChildrenFaacProps = {};

// Function as a Child (FAAC)
const ChildrenFaac: FC<ChildrenFaacProps> = () => {
    return (
        <div className={cn('taChildrenFaac')}>
            <ChildrenFaacChild prop='someProp'>{({ prop }) => <div>{prop}</div>}</ChildrenFaacChild>
        </div>
    );
};

type ChildrenFaacChildProps = {
    children: (params: { prop: NonNullable<string> }) => ReactNode;
    prop: string;
};

const ChildrenFaacChild: FC<ChildrenFaacChildProps> = ({ children, prop }) => {
    return <div className={cn('taChildrenFaacChild')}>{children({ prop })}</div>;
};

export default memo(ChildrenFaac);

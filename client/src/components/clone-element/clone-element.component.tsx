import React, { memo } from 'react';

type CloneElementProps = {
    disabled: boolean;
    children: React.ReactNode;
};

const CloneElement = memo<CloneElementProps>(function CloneElement({ children, disabled = false, ...rest }) {
    let childrenWithProps;

    if (React.isValidElement(children)) {
        childrenWithProps = React.cloneElement(children, { disabled });
    }

    return <div {...rest}>{childrenWithProps}</div>;
});

export default CloneElement;

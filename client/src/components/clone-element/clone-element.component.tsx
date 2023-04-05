import { cloneElement, isValidElement, memo, ReactNode } from 'react';

type CloneElementProps = {
    disabled: boolean;
    children: ReactNode;
};

const CloneElement = memo<CloneElementProps>(function CloneElement({ children, disabled = false, ...rest }) {
    let childrenWithProps;

    if (isValidElement(children)) {
        childrenWithProps = cloneElement<any>(children, { disabled });
    }

    return <div {...rest}>{childrenWithProps}</div>;
});

export default CloneElement;

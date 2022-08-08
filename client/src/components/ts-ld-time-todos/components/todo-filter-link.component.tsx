import { memo } from 'react';

export type ToDoFilterLinkProps = {
    children?: any;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ToDoFilterLink = ({ children, onClick, ...rest }: ToDoFilterLinkProps) => (
    <a
        {...rest}
        href='/'
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
);

export default memo(ToDoFilterLink);

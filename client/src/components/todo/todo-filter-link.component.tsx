import React, {memo} from "react";

export interface IToDoFilterLinkProps {
    children?: any;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ToDoFilterLink = ({children, onClick, ...rest}: IToDoFilterLinkProps) => (
    <a {...rest} href="#" onClick={(e) => {e.preventDefault(); onClick(e)}}>
        {children}
    </a>
);

export default  memo(ToDoFilterLink);

import React, { memo } from "react";
import ToDoFilterLink from "./todo-filter-link.component";

export interface IToDoFilterLinksProps {
    currentFilter?: string;
    onClick: (filterType: string) => void;
}

const ToDoFilterLinks = ({ currentFilter, onClick }: IToDoFilterLinksProps) => {
    const getTodoLinkView = (filterType: string) =>
        currentFilter === filterType ? (
            <span>{filterType}</span>
        ) : (
            <ToDoFilterLink
                onClick={() => {
                    onClick(filterType);
                }}
            >
                {filterType}
            </ToDoFilterLink>
        );

    return (
        <div>
            Filters:
            {getTodoLinkView("All")}
            {getTodoLinkView("Completed")}
            {getTodoLinkView("Active")}
            Current filter: <b>{currentFilter}</b>
        </div>
    );
};

export default memo(ToDoFilterLinks);

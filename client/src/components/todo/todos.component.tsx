import React, {memo} from "react";
import TodoStore from "./todo-store.component";

const Todos: React.FC = () => {

    return (
        <>
            <TodoStore />
        </>
    );

};

export default memo(Todos);

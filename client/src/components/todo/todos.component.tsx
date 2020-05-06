import React, {memo} from "react";
import TodoStore from "./todo-store.component";

const Todos: React.FC = () => (
    <TodoStore />
);

export default memo(Todos);

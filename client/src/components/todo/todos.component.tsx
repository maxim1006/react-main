import React, {memo} from "react";
import TodoStore, {store} from "./todo-store.component";
import TodoHeaderConnectedContainer from "./containers/todo-header-connected-container.component";
import TodoFilterLinksConnectedContainer from "./containers/todo-filter-links-connected-container.component";
import TodoListConnectedContainer from "./containers/todo-list-connected-container.component";
import {Provider} from "react-redux";

const Todos: React.FC = () => (
    // в TodoStore лежит редакс сделанный с 0 с исходным кодом
    // <TodoStore />
    <Provider store={store}>
        <TodoHeaderConnectedContainer/>
        <TodoFilterLinksConnectedContainer/>
        <TodoListConnectedContainer/>
    </Provider>
);

export default memo(Todos);

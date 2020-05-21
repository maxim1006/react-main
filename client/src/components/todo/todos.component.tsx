import React, { memo } from "react";
import { Provider } from "react-redux";
import TodoHeaderConnectedContainer from "./containers/todo-header-connected-container.component";
import TodoFilterLinksConnectedContainer from "./containers/todo-filter-links-connected-container.component";
import TodoListConnectedContainer from "./containers/todo-list-connected-container.component";
import TodoPlansConnectedContainer from "./containers/todo-plans-connected-container.component";
import { store } from "./store";

const Todos: React.FC = () => (
    // в TodoStore лежит редакс сделанный с нуля с исходным кодом
    // <TodoStore />
    <Provider store={store}>
        <section style={{ marginBottom: "20px" }}>
            <TodoPlansConnectedContainer />
        </section>
        <TodoHeaderConnectedContainer />
        <TodoFilterLinksConnectedContainer />
        <TodoListConnectedContainer />
    </Provider>
);

export default memo(Todos);

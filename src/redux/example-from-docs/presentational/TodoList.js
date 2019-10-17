import React from "react";
import TodoComponent from "./Todo";

export default function TodoListComponent({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoComponent key={index} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
        </ul>
    );
}

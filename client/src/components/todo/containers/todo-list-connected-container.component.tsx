import React, { memo } from "react";
import { connect } from "react-redux";
import TodoList from "../components/todo-list.component";
import { ITodo } from "../models/todo.model";
import { toggleTodo } from "../store";

export type TodoListContainerProps = {
    todos: ITodo[];
    visibilityFilter: string;
    onChange: (id: string, completed: boolean) => void;
};

const TodoListConnectedContainer = ({
    todos,
    visibilityFilter,
    onChange
}: TodoListContainerProps) => (
    <TodoList
        todos={todos}
        currentFilter={visibilityFilter}
        onChange={onChange}
    />
);

const mapStateToProps = (state: any) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any) => ({
    onChange: (id: string, completed: boolean) => {
        dispatch(toggleTodo(id, completed));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(TodoListConnectedContainer));

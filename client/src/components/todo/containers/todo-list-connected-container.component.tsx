import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TodoList from '../components/todo-list.component';
import { selectTodos, selectVisibilityFilter, toggleTodo } from '../store';
import { TodosAppState } from '../store/state';
import { TodoModel } from '../../../models/todo.model';

export type TodoListContainerProps = {
    todos: TodoModel[];
    visibilityFilter: string;
    onChange: (id: string, completed: boolean) => void;
};

const TodoListConnectedContainer = ({ todos, visibilityFilter, onChange }: TodoListContainerProps) => (
    <TodoList todos={todos} currentFilter={visibilityFilter} onChange={onChange} />
);

// базовый вариант
// const mapStateToProps = (state: any) => ({
//     todos: state.todos,
//     visibilityFilter: state.visibilityFilter
// });

// тоже но с селекторами
// const mapStateToProps = (state: any) => ({
//     todos: selectTodos(state),
//     visibilityFilter: selectVisibilityFilter(state)
// });

// тоже но с createStructuredSelector
const mapStateToProps = createStructuredSelector<TodosAppState, { todos: TodoModel[]; visibilityFilter: string }>({
    todos: selectTodos,
    visibilityFilter: selectVisibilityFilter
});

const mapDispatchToProps = (dispatch: any) => ({
    onChange: (id: string, completed: boolean) => {
        dispatch(toggleTodo(id, completed));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(TodoListConnectedContainer));

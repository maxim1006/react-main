import { memo } from 'react';
import Todo from './todo.component';
import { TodoModel } from '@app/models/todo.model';

export interface ITodoListProps {
    currentFilter: string;
    todos: TodoModel[];
    onChange: (id: string, completed: boolean) => void;
}

const TodoList = ({ todos, currentFilter, onChange }: ITodoListProps) => (
    <ul>
        {getFilteredTodos(todos, currentFilter).map(
            ({ id, name, completed }: { id: string; name: string; completed: boolean }) => (
                <li key={id}>
                    <Todo name={name} completed={completed} onChange={() => onChange(id, completed)} />
                </li>
            )
        )}
    </ul>
);

export default memo(TodoList);

// helpers
function getFilteredTodos(todos: any, filter: string) {
    return todos.filter((todo: TodoModel) => {
        switch (filter) {
            case 'Completed': {
                return todo.completed;
            }

            case 'Active': {
                return !todo.completed;
            }

            default:
                return todo;
        }
    });
}

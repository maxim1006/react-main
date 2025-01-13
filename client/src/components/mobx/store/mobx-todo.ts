import { makeAutoObservable } from 'mobx';

export interface MobxTodoModel {
    id: string;
    title: string;
    completed: boolean;
}

class MobxTodo {
    todos: MobxTodoModel[] = [
        { id: '0', title: 'Yandex turbo', completed: true },
        { id: '1', title: 'Yandex sevices', completed: false },
    ];

    constructor() {
        // для глубокого отслеживания объектов
        // makeAutoObservable(this, {}, { deep: true });
        makeAutoObservable(this, {}, { deep: true });
    }

    addTodo(todo: MobxTodoModel) {
        this.todos.push(todo);
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter(i => i.id !== id);
    }

    completeTodo(todo: MobxTodoModel) {
        todo.completed = !todo.completed;
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(todo => this.todos.push(todo));
    }
}

export default new MobxTodo();

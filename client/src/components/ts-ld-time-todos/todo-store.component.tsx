import React, { memo } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoFilterLinksConnectedContainer from './containers/todo-filter-links-connected-container.component';
import TodoListConnectedContainer from './containers/todo-list-connected-container.component';
import TodoHeaderConnectedContainer from './containers/todo-header-connected-container.component';
import { TODOS_TYPES, VISIBILITY_FILTER_TYPES } from './store/actions';
import { TodoModel } from '@app/models/todo.model';
import { generateUniqueId } from '@app/common/utils/common.utils';

// Init states
const initStateTodos = {
    todos: [
        {
            name: 'deeply learn redux',
            completed: false,
            id: generateUniqueId(),
        },
    ],
};

const initStateVisibilityFilter = {
    visibilityFilter: 'All',
};

// Reducers
// использую паттерн комбинации редюсеров в один большой todoAppReducer
const todosReducer = (state: any = initStateTodos, action: { type?: string; payload?: TodoModel }) => {
    switch (action.type) {
        case TODOS_TYPES.TOGGLE: {
            const { id, completed }: TodoModel = action.payload as TodoModel;

            return state.map((todo: TodoModel) => (todo.id === id ? { ...todo, completed: !completed } : todo));
        }

        case TODOS_TYPES.ADD: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
};

const visibilityFilterReducer = (state = initStateVisibilityFilter, action: { type: string; payload: string }) => {
    switch (action.type) {
        case VISIBILITY_FILTER_TYPES.SET: {
            return action.payload;
        }

        default:
            return state;
    }
};

// общий редюсер
// const todoAppReducer = (state: any = {}, action: {type: string; payload: any}) => ({
//     todos: todosReducer(state.todos, action),
//     visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
// });
// эта запись ровно такая же как и с combineReducers
// имплементация combineReducers
const combineReducers =
    (reducers: any) =>
    (state: any = {}, action: any) =>
        Object.keys(reducers).reduce((nextState: any, key: string) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});

const todoAppReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
});

// Action creators
export const toggleCompleteTodoActionCreator = (id: string, completed: boolean) => ({
    type: TODOS_TYPES.TOGGLE,
    payload: {
        id,
        completed,
    },
});

export const setVisibilityFilterActionCreator = (filter: string) => ({
    type: VISIBILITY_FILTER_TYPES.SET,
    payload: filter,
});

export const addTodoActionCreator = (name: string) => ({
    type: TODOS_TYPES.ADD,
    payload: {
        name,
        completed: false,
        id: generateUniqueId(),
    },
});

// Store
// имплементация createStore в counter-store.component.tsx
// Также тут включаю девтулы с редаксом, но при этом надо отключить тут client/src/store/configureStore.js
export const store = createStore(
    todoAppReducer,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// создаю контекст, добавил as any чтобы не падали ошибки тайпскрипт при пустом стейте
export const TodosStoreReactContext = React.createContext({
    store,
    state: {},
}) as any;
// создаю компонент с контекстом и изменением его вэлью (Provider также как в редакс оборачиваю)
// export const Provider = ({children, store}: any) => {
//     // каждый раз когда будет меняться этот стейт внутренние компоненты завязанные на него будут ререндериться
//     const state = useTodoState();
//
//     return (
//         <TodosStoreReactContext.Provider value={{store, state}}>
//             {children}
//         </TodosStoreReactContext.Provider>
//     );
// };

const TodoStore: React.FC = () => {
    return (
        // Если буду использовать провайдер выше то не получу connect из редакса, а смогу забирать только через
        // контекст стейт, поэтому использую из редакса чтобы продолжить примеры с connect
        <Provider store={store}>
            <TodoHeaderConnectedContainer />
            <TodoFilterLinksConnectedContainer />
            <TodoListConnectedContainer />
        </Provider>
    );
};

export default memo(TodoStore);

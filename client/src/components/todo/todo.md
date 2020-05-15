1) Сперва все писал в todo-store
- Init state
- reducers
- action creators
- combine reducers
- все компоненты подряд

2) Вынес presentational layer components
- todo
- todo-filter-link
- todo-filter-links
- todo-header
- todo-list

3) Вынес container layer components (так как их проперти нужны только для прокидывания во внутренние presentational layer компоненты, поэтому просто выношу их и внутри них использую стейт)
- TodoHeaderContainer
- TodoFilterLinksContainer
- TodoListContainer

4) вынес useTodoState и инжекчу его в container layer components

5) получаю стейт и стор из контекста обернув все в <Provider store={store}>
как в редакс

6) Делаю дубликаты контейнеров но вместо контекста использую коннект

7) Выношу в стор всю структуру и вместо <TodoStore /> в `client/src/components/todo/todos.component.tsx` делаю 
```js
<Provider store={store}>
    <TodoHeaderConnectedContainer/>
    <TodoFilterLinksConnectedContainer/>
    <TodoListConnectedContainer/>
</Provider>
```

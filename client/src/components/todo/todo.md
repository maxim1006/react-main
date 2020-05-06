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

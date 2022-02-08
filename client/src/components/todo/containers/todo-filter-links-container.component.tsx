import { memo, useContext } from 'react';
import { setVisibilityFilterActionCreator, TodosStoreReactContext } from '../todo-store.component';
import ToDoFilterLinks from '../components/todo-filter-links.component';

const TodoFilterLinksContainer = () => {
    const { store, state } = useContext(TodosStoreReactContext);

    return (
        <>
            {/* Это container layer component*/}
            <ToDoFilterLinks
                currentFilter={state.visibilityFilter}
                onClick={filterType => store.dispatch(setVisibilityFilterActionCreator(filterType))}
            />
        </>
    );
};

export default memo(TodoFilterLinksContainer);

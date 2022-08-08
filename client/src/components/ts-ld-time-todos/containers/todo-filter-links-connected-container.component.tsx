import { memo } from 'react';
import { connect } from 'react-redux';
import ToDoFilterLinks from '../components/todo-filter-links.component';
import { setVisibilityFilter } from '../store';

type TodoFilterLinksContainerProps = {
    visibilityFilter: string;
    onClick: (filterType: string) => void;
};

const TodoFilterLinksConnectedContainer = ({ visibilityFilter, onClick }: TodoFilterLinksContainerProps) => (
    <ToDoFilterLinks currentFilter={visibilityFilter} onClick={onClick} />
);

const mapStateToProps = (state: any) => ({
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: any) => ({
    onClick: (filterType: string) => {
        dispatch(setVisibilityFilter(filterType));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(TodoFilterLinksConnectedContainer));

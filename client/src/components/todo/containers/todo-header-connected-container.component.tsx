import React, { memo } from 'react';
import { connect } from 'react-redux';
import TodoHeader from '../components/todo-header.component';
import { addTodo } from '../store';

const TodoHeaderConnectedContainer = ({ dispatch }: any) => (
    <TodoHeader
        onClick={currentValue => {
            dispatch(addTodo(currentValue));
        }}
    />
);

// null в mapStateToProps означает что не надо подписываться на изменения стора
export default connect(null, null)(memo(TodoHeaderConnectedContainer));

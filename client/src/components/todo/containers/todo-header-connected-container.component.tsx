import React, {memo} from "react";
import TodoHeader from "../components/todo-header.component";
import {connect} from "react-redux";
import {addTodo} from "../store";

const TodoHeaderConnectedContainer = ({dispatch}: any) => (
    <TodoHeader
        onClick={(currentValue) => {
            dispatch(addTodo(currentValue));
        }}
    />
);

// null в mapStateToProps означает что не надо подписываться на изменения стора
export default connect(null, null)(memo(TodoHeaderConnectedContainer));

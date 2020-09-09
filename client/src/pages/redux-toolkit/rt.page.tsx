import React, { memo } from 'react';
import { Provider } from 'react-redux';
import RtCounter from '../../components/redux-toolkit/counter/rt-counter.component';
import RtStore from '../../redux-toolkit/rt-configureStore';
import RtTodos from '../../components/redux-toolkit/todos/rt-todos.component';

const Rt = () => {
    return (
        <Provider store={RtStore}>
            <RtCounter />
            <RtTodos />
        </Provider>
    );
};

export default memo(Rt);

import React, { memo } from 'react';
import { Provider } from 'react-redux';
import RtCounter from '../../components/redux-toolkit/counter/rt-counter.component';
import RtStore, { RtPersistor } from '../../redux-toolkit/rt-configureStore';
import RtTodos from '../../components/redux-toolkit/todos/rt-todos.component';
import RtIssuesDisplay from '../../components/redux-toolkit/issues-display/rt-issues-display.component';
import RtPosts from '../../components/redux-toolkit/posts/rt-posts.component';
import { PersistGate } from 'redux-persist/integration/react';

const Rt = () => {
    return (
        <Provider store={RtStore}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={RtPersistor}>
                <RtCounter />
                <RtTodos />
                <RtIssuesDisplay />
                <RtPosts />
            </PersistGate>
        </Provider>
    );
};

export default memo(Rt);

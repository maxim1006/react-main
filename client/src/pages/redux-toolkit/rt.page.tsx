import React, { memo } from 'react';
import { Provider } from 'react-redux';
import RtCounter from '../../components/redux-toolkit/counter/rt-counter.component';
import RtStore, { RtPersistor } from '../../redux-toolkit/rt-configureStore';
import RtTodos from '../../components/redux-toolkit/todos/rt-todos.component';
import RtIssuesDisplay from '../../components/redux-toolkit/issues-display/rt-issues-display.component';
import RtPosts from '../../components/redux-toolkit/posts/rt-posts.component';
import { PersistGate } from 'redux-persist/integration/react';
import RtUsersContainer from '@app/components/redux-toolkit/users/rt-users.container';

const Rt = () => {
    return (
        <Provider store={RtStore}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={RtPersistor}>
                <RtUsersContainer />
                <RtCounter />
                <RtTodos />
                <RtIssuesDisplay />
                <RtPosts />
            </PersistGate>
        </Provider>
    );
};

export default memo(Rt);

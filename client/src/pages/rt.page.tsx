import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RtTodos from '@app/components/redux-toolkit/todos/rt-todos.component';

const Rt = () => {
    return (
        <Provider store={store}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={persistor}>
                {/*<RtBooksContainer />*/}
                {/*<RtUsersContainer />*/}
                {/*<RtUsersContainer1 />*/}
                {/*<RtCounter />*/}
                <RtTodos />
                {/*<RtIssuesDisplay />*/}
                {/*<RtPosts />*/}
            </PersistGate>
        </Provider>
    );
};

export default memo(Rt);

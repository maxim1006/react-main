import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RtPosts from '@app/components/redux-toolkit/posts/rt-posts.component';
import UserListThunkContainer from '@app/components/redux-toolkit/user/list/user-list-thunk.container';

const Rt = () => {
    return (
        <Provider store={store}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={persistor}>
                {/*<ProductContainer />*/}
                {/*<UserListApiContainer />*/}
                <UserListThunkContainer />
                {/*<RtBooksContainer />*/}
                {/*<RtUsersContainer />*/}
                {/*<RtUsersContainer1 />*/}
                {/*<RtCounter />*/}
                {/*<RtTodos />*/}
                {/*<RtIssuesDisplay />*/}
                <RtPosts />
            </PersistGate>
        </Provider>
    );
};

export default memo(Rt);

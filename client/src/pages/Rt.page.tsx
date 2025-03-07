import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';
import RtPosts from '@app/components/redux-toolkit/posts/rt-posts.component';
import { PersistGate } from 'redux-persist/integration/react';
import UserListApiContainer from '@app/components/redux-toolkit/user/list/user-list-api.container';

const Rt = () => {
    return (
        <Provider store={store}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={persistor}>
                {/*<ReduxCustomContextContainer />*/}
                {/*<ReduxContextContainer />*/}
                {/*<ProductContainer />*/}
                <UserListApiContainer />
                {/*<LocalStorageRtk />*/}
                {/*<UserListThunkContainer />*/}
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

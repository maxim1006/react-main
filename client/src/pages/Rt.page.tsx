import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StoreWithProtectedAction } from '@app/components/store-with-protected-actions/store-with-protected-actions.component';

const Rt = () => {
    return (
        <Provider store={store}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={persistor}>
                <StoreWithProtectedAction />
                {/*<ReduxCustomContextContainer />*/}
                {/*<ReduxContextContainer />*/}
                {/*<ProductContainer />*/}
                {/*<UserListApiContainer />*/}
                {/*<LocalStorageRtk />*/}
                {/*<UserListThunkContainer />*/}
                {/*<RtBooksContainer />*/}
                {/*<RtUsersContainer />*/}
                {/*<RtUsersContainer1 />*/}
                {/*<RtCounter />*/}
                {/*<RtTodos />*/}
                {/*<RtIssuesDisplay />*/}
                {/*<RtPosts />*/}
            </PersistGate>
        </Provider>
    );
};

export default memo(Rt);

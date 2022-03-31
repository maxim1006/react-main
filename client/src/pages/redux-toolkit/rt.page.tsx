import React, { memo } from 'react';
import { Provider } from 'react-redux';
import RtStore, { RtPersistor } from '../../redux-toolkit/rt-configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import RtBooksContainer from '@app/components/redux-toolkit/books/rt-books.container';

const Rt = () => {
    return (
        <Provider store={RtStore}>
            {/* должен обернуть в гейт чтобы подгрузилась инфа из локал сторадж*/}
            <PersistGate loading={null} persistor={RtPersistor}>
                <RtBooksContainer />
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

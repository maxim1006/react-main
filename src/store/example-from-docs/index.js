import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import {ReduxReactDocsComponent} from "./ReduxReactDocs";

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <ReduxReactDocsComponent/>
    </Provider>,
    document.getElementById('rootReduxDocs')
);

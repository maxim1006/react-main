import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { client } from './gql/gql';
import App from './components/app/app.component';
import { ApolloProvider, useQuery } from '@apollo/client';
import Login from './components/login/login.component';
import { IsUserLoggedInDocument } from './generated/operations';

function IsLoggedIn() {
    const { data } = useQuery(IsUserLoggedInDocument);
    return data.isLoggedIn ? <App /> : <Login />;
}

ReactDOM.render(
    // <React.StrictMode>
    <Suspense fallback={'Loading...'}>
        <ApolloProvider client={client}>
            <IsLoggedIn />
        </ApolloProvider>
    </Suspense>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

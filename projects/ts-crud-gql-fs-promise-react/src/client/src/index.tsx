import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import App from './components/app/app.component';
import { ApolloClient, ApolloProvider, gql, NormalizedCacheObject, useQuery } from '@apollo/client';
import { cache } from './cache';
import Login from './components/login/login.component';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: localStorage.getItem('token') || '',
        'client-name': 'Max',
        'client-version': '1.0.0',
    },
    typeDefs,
    resolvers: {},
});

// isLoggedIn @client переменную беру из ./cache файла
// Querying local data from the Apollo cache is almost the same as querying remote data from a graph API.
// The only difference is that you add a @client directive to a local field to tell
// Apollo Client to pull it from the cache.
const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
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

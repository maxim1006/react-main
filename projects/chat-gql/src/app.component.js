import React from 'react';
import ReactDOM from 'react-dom';
import { WebSocketLink } from '@apollo/client/link/ws';
import './index.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import ChatComponent from './components/chat/chat.component';

const wsLink = new WebSocketLink({
    uri: `ws://localhost:3001/graphql`,
    options: {
        reconnect: true
    }
});

const client = new ApolloClient({
    link: wsLink,
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
});

const AppComponent = () => {
    return (
        <ApolloProvider client={client}>
            Hi there, I&apos;m React from Webpack 5.
            <ChatComponent />
        </ApolloProvider>
    );
};

ReactDOM.render(<AppComponent />, document.getElementById('app'));

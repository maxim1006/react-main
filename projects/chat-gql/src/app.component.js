import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import ChatComponent from './components/chat/chat.component';

const AppComponent = () => {
    return (
        <>
            Hi there, I&apos;m from ChatGql project.
            <ChatComponent />
        </>
    );
};

ReactDOM.render(<AppComponent />, document.getElementById('app'));

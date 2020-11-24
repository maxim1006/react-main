import React from 'react';
import ReactDOM from 'react-dom';
import WsComponent from './components/ws.component';

const AppComponent = () => {
    return (
        <>
            <WsComponent />
        </>
    );
};

ReactDOM.render(<AppComponent />, document.getElementById('app'));

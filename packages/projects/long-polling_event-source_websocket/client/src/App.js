import './App.css';
import Websocket from './websocket/websocket';

function App() {
    return (
        <div className="App">
            <Websocket />
            {/*<EventSource />*/}
            {/*<LongPolling />*/}
        </div>
    );
}

export default App;

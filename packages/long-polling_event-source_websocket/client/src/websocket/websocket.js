import React, { memo, useCallback, useRef, useState } from 'react';
import styles from './websocket.module.css';

const Websocket = memo(() => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const [userName, setUserName] = useState('');
    const socket = useRef();

    const onConnect = useCallback(() => {
        socket.current = new window.WebSocket('ws://localhost:5000');

        socket.current.onopen = () => {
            setConnected(true);
            const message = {
                event: 'connection',
                userName,
                id: Date.now(),
            };
            socket.current.send(JSON.stringify(message));
            console.log('Websocket is connected');
        };
        socket.current.onmessage = event => {
            const message = JSON.parse(event.data);
            setMessages(i => [...i, message]);
        };
        socket.current.onclose = () => console.log('Websocket is closed');
        socket.current.onerror = () => console.error('Websocket error');
    }, [userName]);

    const sendMessage = useCallback(async () => {
        const message = {
            event: 'message',
            userName,
            message: value,
            id: Date.now(),
        };

        socket.current.send(JSON.stringify(message));
        setValue('');
    }, [value, userName]);

    if (!connected)
        return (
            <div className={styles.form}>
                <input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    type="text"
                    className={styles.input}
                />
                <button onClick={onConnect}>Login</button>
            </div>
        );

    return (
        <div className={styles.host}>
            <h2>Websocket</h2>
            <div className={styles.form}>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                <button type="button" onClick={sendMessage}>
                    Send
                </button>
            </div>
            <h4>Messages</h4>
            {!!messages.length && (
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            {message.event === 'connection' ? (
                                <div>User {message.userName} connected</div>
                            ) : (
                                <div>
                                    {message.userName} wrote: {message.message}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default Websocket;

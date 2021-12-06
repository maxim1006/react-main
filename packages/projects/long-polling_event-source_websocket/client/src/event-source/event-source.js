import React, { memo, useCallback, useEffect, useState } from 'react';
import styles from './event-source.module.css';
import axios from 'axios';

const EventSource = memo(() => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const sendMessage = useCallback(async () => {
        axios.post('http://localhost:5000/post-messages', {
            message: value,
        });
    }, [value]);

    const subscribe = useCallback(async () => {
        const eventSource = new window.EventSource('http://localhost:5000/connect-messages');
        eventSource.onmessage = function(event) {
            const data = JSON.parse(event.data);

            setMessages(i => [...i, data.message]);
        };
    }, []);

    useEffect(() => {
        subscribe();
    }, [subscribe]);

    return (
        <div className={styles.host}>
            <h2>Event source</h2>
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
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default EventSource;

import React, { memo, useCallback, useEffect, useState } from 'react';
import styles from './long-polling.module.css';
import axios from 'axios';

const LongPolling = memo(() => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const sendMessage = useCallback(async () => {
        axios.post('http://localhost:5000/post-messages', {
            message: value,
        });
    }, [value]);

    const subscribe = useCallback(async () => {
        try {
            const data = await axios.get('http://localhost:5000/get-messages');
            setMessages(i => [...i, data.data.message]);
            subscribe();
        } catch (e) {
            console.error(e);
            setTimeout(() => {
                subscribe();
            }, 500);
        }
    }, []);

    useEffect(() => {
        subscribe();
    }, [subscribe]);

    return (
        <div className={styles.host}>
            <h2>Long polling</h2>
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

export default LongPolling;

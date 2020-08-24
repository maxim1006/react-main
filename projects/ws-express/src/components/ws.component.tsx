import React, { memo, useEffect, useRef, useState } from 'react';
import { MessageType, WebWorkerMessageType } from '../model/message.model';
// @ts-ignore
import Worker from '../webworker.worker';

export interface Message {
    readonly type: MessageType;
    readonly payload?: any;
}

const worker = new Worker('../webworker.worker', { type: 'module' });

const WsComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        initWorker(message => {
            setChatData(i => [...i, message?.data?.payload] as []);
        });

        return () => destroyWorker();
    }, []);

    const sendMessage = () => {
        worker.postMessage({
            type: WebWorkerMessageType.SEND_DATA_ON_WEB_SOCKET,
            payload: inputRef.current.value
        });
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={sendMessage}>Send</button>

            <ul>
                {chatData.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </>
    );
};

export default memo(WsComponent);

// helpers
function initWorker(cb: (message: MessageEvent) => void): void {
    worker.addEventListener('message', cb);
    worker.postMessage({ type: WebWorkerMessageType.INIT_WEB_SOCKET });
}

function closeWebSocket(message: string = ''): void {
    worker.postMessage({ type: WebWorkerMessageType.CLOSE_WEB_SOCKET });
}

function destroyWorker(): void {
    closeWebSocket();
    worker.terminate();
}

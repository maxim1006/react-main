/// <reference lib="webworker" />
import { Message, WebSocketMessageType, WebWorkerMessageType } from './model/message.model';

const WEB_SOCKET_URL: string = 'ws://localhost:4005/ws';
const INITIAL_VALUE_RECONNECT_ATTEMPTS: number = 15;

let socket: WebSocket;
let reconnectAttempts: number = INITIAL_VALUE_RECONNECT_ATTEMPTS;

var STATUS_CLOSE_SOCKET = {
    NORMAL: 1000,
    NO_STATUS_RECEIVED: 1001
};

addEventListener('message', ({ data }: MessageEvent): void => {
    const { type, payload }: Message = data;

    switch (type) {
        case WebWorkerMessageType.INIT_WEB_SOCKET:
            socket = connectSocket();
            break;
        case WebWorkerMessageType.CLOSE_WEB_SOCKET:
            socket.close(1000);
            break;
        case WebWorkerMessageType.SEND_DATA_ON_WEB_SOCKET:
            if (socket?.readyState === WebSocket.CLOSED) {
                reconnectAttempts = INITIAL_VALUE_RECONNECT_ATTEMPTS;
                reconnectSocket(sock => sock.send(JSON.stringify(payload)));
                return;
            }

            console.log('WebWorker send data ', payload);

            sendDataOnWebSocket(
                {
                    type: WebSocketMessageType.ADD_CURRENT_NOTIFICATION,
                    payload
                } as Message,
                socket
            );
            break;
    }
});

const reconnectSocket = (callback?: (sock: WebSocket) => void) => {
    if (socket.readyState === WebSocket.CONNECTING) {
        return;
    }

    if (reconnectAttempts > 0) {
        socket = connectSocket(callback);
    }

    reconnectAttempts--;
};

const connectSocket = (callback?: (sock: WebSocket) => void): WebSocket => {
    const sock = new WebSocket(WEB_SOCKET_URL);

    sock.onopen = () => {
        reconnectAttempts = INITIAL_VALUE_RECONNECT_ATTEMPTS;

        sock.onmessage = ({ data }: MessageEvent) => {
            console.log('sock.onmessage ', data);
            handleMessageFromSocket(data);
        };

        const pingIntervalID = setInterval(() => {
            // uncomment for ping
            // sock.send(''); // ping message
        }, 9000);

        sock.onclose = ({ code }: CloseEvent) => {
            if (code !== STATUS_CLOSE_SOCKET.NORMAL && code !== STATUS_CLOSE_SOCKET.NO_STATUS_RECEIVED) {
                reconnectSocket();
            }
            clearInterval(pingIntervalID);
        };

        callback && callback(sock);
    };

    sock.onerror = (error: Event) => {
        reconnectSocket();
        console.log('Socket error', error);
    };

    return sock;
};

const handleMessageFromSocket = (message: string): void => {
    console.log('handleMessageFromSocket ', message);
    const messageObj: Message = JSON.parse(message);
    postMessage(messageObj);
};

const sendDataOnWebSocket = (message: Message, sock: WebSocket) => {
    sock.readyState === WebSocket.OPEN && sock.send(JSON.stringify(message));
};

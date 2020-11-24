export enum WebWorkerMessageType {
    INIT_WEB_SOCKET = 'INIT_WEB_SOCKET',
    CLOSE_WEB_SOCKET = 'CLOSE_WEB_SOCKET',
    SEND_DATA_ON_WEB_SOCKET = 'SEND_DATA_ON_WEB_SOCKET'
}

export enum WebSocketMessageType {
    ADD_CURRENT_NOTIFICATION = 'ADD_CURRENT_NOTIFICATION',
}

export type MessageType = WebWorkerMessageType & WebSocketMessageType;

export interface Message {
    readonly type: MessageType;
    readonly payload?: any;
}

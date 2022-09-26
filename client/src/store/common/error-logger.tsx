import { Middleware, MiddlewareAPI } from 'redux';
import { AnyAction, isRejected } from '@reduxjs/toolkit';
import { HeadersEnum } from '@app/models/header.model';

export enum RequestErrorNameEnum {
    ConditionError = 'ConditionError',
}

const NOTIFICATION_BLACK_LIST: string[] = [];

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
    let headersReq = action.meta?.baseQueryMeta?.request?.headers;
    let headersRes = action.meta?.baseQueryMeta?.response?.headers;

    if (isRejected(action)) {
        if (headersReq) {
            for (let i of headersReq) {
                console.log('headersReq', i);
            }
        }

        if (headersRes) {
            for (let i of headersRes) {
                console.log('headersRes', i);
            }
        }

        // RequestErrorNameEnum.ConditionError - RTK Query internal error, that just means that another request was skipped because there was either already a request in flight or already a value in cache, so no request needs to be made. This is an internal rejection that RTK-Query uses to track component subscriptions and not an error.
        if (
            action.error.name !== RequestErrorNameEnum.ConditionError &&
            !NOTIFICATION_BLACK_LIST.includes(action.meta.arg?.endpointName)
        ) {
            // тут можно вызывать нотификашку например
            logRequestError(action);
        }
    }

    return next(action);
};

// helpers
function logRequestError(action: AnyAction) {
    const meta = action.meta.baseQueryMeta;
    const { method, url } = meta.request;
    const { status, statusText } = meta.response;
    const requestHeaders = action.meta?.baseQueryMeta?.request?.headers || [];

    const xRequestId = [...requestHeaders].find(([header]) => header === HeadersEnum.XRequestId)?.[1];

    console.group(`ERROR: ${method} ${url}`);
    console.log(`STATUS: ${status}`);
    console.log(`STATUS-TEXT: ${statusText}`);
    console.log(`X-REQUEST-ID: ${xRequestId}`);
    console.groupEnd();
}

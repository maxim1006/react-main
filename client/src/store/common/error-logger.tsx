import { Middleware, MiddlewareAPI } from 'redux';
import { isRejected } from '@reduxjs/toolkit';

export enum RequestErrorNameEnum {
    ConditionError = 'ConditionError',
}

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
        if (action.error.name !== RequestErrorNameEnum.ConditionError) {
            // тут можно вызывать нотификашку например
            console.error({
                title: action.meta.arg?.endpointName,
                description: [{ ...action.error, ...action.payload }],
            });
        }
    }

    return next(action);
};

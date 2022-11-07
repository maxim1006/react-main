import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { v4 as uuidv4 } from 'uuid';
import { API_BASE_URL, API_PATH } from '@app/constants/common.constants';

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}${API_PATH}`,
        prepareHeaders: (headers, { extra, endpoint, getState }) => {
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'anonymous');
            headers.set('X-Request-ID', uuidv4());

            return headers;
        },
    }),
    // tagTypes1  это таг тип за которым при инвалидации будет следить кеш rtk query, типо как кеш ГКЛ
    tagTypes: ['User'],
    endpoints: _ => ({}),
});

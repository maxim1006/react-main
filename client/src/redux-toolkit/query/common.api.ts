import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'anonymous');

            return headers;
        },
    }),
    // tagTypes1  это таг тип за которым при инвалидации будет следить кеш rtk query, типо как кеш ГКЛ
    tagTypes: ['User'],
    endpoints: _ => ({}),
});

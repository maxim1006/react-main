import { v4 as uuidv4 } from 'uuid';
import { API_BASE_URL, API_PATH } from '@app/constants/common.constants';

// !!!!!!!!!!!!!!!!!!!! https://stackoverflow.com/questions/69502501/redux-rtk-not-auto-generating-react-hooks
// охренеть обязательно @reduxjs/toolkit/query/react вместо @reduxjs/toolkit/query
//https://github.com/reduxjs/redux-toolkit/issues/4537#issuecomment-2260938954
// все надо импортить из @reduxjs/toolkit/query/react
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    // tagTypes: ['User'],
    endpoints: _ => ({}),
});

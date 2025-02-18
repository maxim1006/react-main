import { commonApi } from '@app/store/common/common.api';

const LOCAL_STORAGE_API = {
    SAFE_UNUSED_TIME: 0,
};

const localStorageApi = commonApi.enhanceEndpoints({ addTagTypes: ['localStorage'] }).injectEndpoints({
    endpoints: builder => ({
        getLocalStorageItem: builder.query<string | null, string>({
            queryFn: key => {
                try {
                    const item = localStorage.getItem(key);
                    return { data: item };
                } catch (error) {
                    return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
                }
            },
            keepUnusedDataFor: LOCAL_STORAGE_API.SAFE_UNUSED_TIME,
            providesTags: (_result, _error, key) => [{ type: 'localStorage', id: key }],
        }),
        setLocalStorageItem: builder.mutation<null, { key: string; value: string }>({
            queryFn: ({ key, value }) => {
                try {
                    localStorage.setItem(key, value);
                    return { data: null };
                } catch (error) {
                    return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
                }
            },
            invalidatesTags: (_result, _error, { key }) => [{ type: 'localStorage', id: key }],
        }),
        removeLocalStorageItem: builder.mutation<null, string>({
            queryFn: key => {
                try {
                    localStorage.removeItem(key);
                    return { data: null };
                } catch (error) {
                    return { error: { status: 'CUSTOM_ERROR', error: String(error) } };
                }
            },
            invalidatesTags: (_result, _error, key) => [{ type: 'localStorage', id: key }],
        }),
    }),
});

const setLocalStorageItem = (key: string, value: string) =>
    localStorageApi.endpoints.setLocalStorageItem.initiate({ key, value });

const setJsonLocalStorageItem = <T>(key: string, value: T) => setLocalStorageItem(key, JSON.stringify(value));

export { localStorageApi, setLocalStorageItem, setJsonLocalStorageItem };

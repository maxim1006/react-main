import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { UserModel } from '@app/models/user.model';
import { apiUserApi } from '@app/store/user/api-user.api';
import { RootState } from '@app/store/store';

// это пример как красиво прокидывать в стейт то что пришло из rtk query
const usersApiAdapter = createEntityAdapter<UserModel, UserModel['id']>({
    selectId: (user: UserModel) => user.id, // Указываем, какое поле является ID
    sortComparer: (a, b) => {
        if (!a.name || !b.name) return 0;

        return a.name.localeCompare(b.name);
    }, // Сортировка по имени (опционально)
});

const usersApiSlice = createSlice({
    name: 'users',
    initialState: usersApiAdapter.getInitialState<{ loading: boolean | undefined }>({
        loading: undefined,
    }),
    reducers: {
        // Здесь можно добавить дополнительные редюсеры, если нужно
    },
    extraReducers: builder => {
        builder.addMatcher(apiUserApi.endpoints.fetchUserList.matchFulfilled, (state, action) => {
            // При успешном запросе нормализуем данные с помощью адаптера
            usersApiAdapter.setAll(state, action.payload);
            state.loading = false;
        });
        builder.addMatcher(apiUserApi.endpoints.fetchUserList.matchPending, state => {
            state.loading = true;
        });
        builder.addMatcher(apiUserApi.endpoints.fetchUserList.matchRejected, state => {
            state.loading = false;
        });
    },
});

export const {
    selectAll: selectAllApiUsers,
    selectById: selectApiUserById,
    selectIds: selectApiUserIds,
} = usersApiAdapter.getSelectors((state: RootState) => state.users);

export default usersApiSlice.reducer;

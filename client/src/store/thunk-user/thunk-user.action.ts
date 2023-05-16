import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserModel } from '@app/models/user.model';
import { THUNK_USERS_URL } from '@app/constants/api.constants';

export const fetchThunkUserAction = createAsyncThunk<UserModel[]>('thunkUser/fetchAll', async (_, thunkApi) => {
    try {
        const response = await fetch(THUNK_USERS_URL);
        return await response.json();
    } catch (e) {
        return thunkApi.rejectWithValue(e);
    }
});

export const addThunkUserAction = createAsyncThunk<UserModel, Partial<UserModel>>(
    'thunkUser/add',
    async (user, thunkApi) => {
        try {
            const response = await fetch(THUNK_USERS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(user),
            });
            return await response.json();
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const updateThunkUserAction = createAsyncThunk<UserModel, UserModel>(
    'thunkUser/update',
    async (user, thunkApi) => {
        try {
            const response = await fetch(THUNK_USERS_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(user),
            });
            return await response.json();
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const deleteThunkUserAction = createAsyncThunk<UserModel, UserModel>(
    'thunkUser/delete',
    async (user, thunkApi) => {
        try {
            const response = await fetch(`${THUNK_USERS_URL}/${user.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(user),
            });
            return await response.json();
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

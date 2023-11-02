import { apiUserApi } from '@app/store/user/api-user.api';
import { RootState } from '@app/store/store';

export const selectUserGetUsersStore = apiUserApi.endpoints.fetchUserList.select(null);

export const selectApiUserListIsLoading = (state: RootState) => selectUserGetUsersStore(state).isLoading;

export const selectApiUserListIsError = (state: RootState) => selectUserGetUsersStore(state).isError;

export const selectApiUserListIsSuccess = (state: RootState) => selectUserGetUsersStore(state).isSuccess;

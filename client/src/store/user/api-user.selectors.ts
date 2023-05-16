import { apiUserApi } from '@app/store/user/api-user.api';
import { RootState } from '@app/store/store';

export const apiUserApiFetchUserListLoading = (state: RootState) =>
    apiUserApi.endpoints.fetchUserList.select()(state).isLoading;

import customAxios from '../../../common/api/axios';

export async function getUserApi({ payload, cancelToken }) {
    try {
        const { data } = await customAxios.get('users', { cancelToken: cancelToken.token });

        return data;
    } catch (error) {
        console.log('getUserApi saga api ', error);
    }

    return null;
}

import customAxios from '../../../common/api/axios';

export async function getFamilyApi({ payload, cancelToken }) {
    try {
        const { data } = await customAxios.get('family', { cancelToken: cancelToken.token });

        return data;
    } catch (error) {
        console.log('getUserApi saga api ', error);
    }

    return null;
}

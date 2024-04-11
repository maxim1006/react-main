import getData, { getDataAxios } from '../get-data';

describe('Get Data', () => {
    test('Get data fetch empty url', async () => {
        const data = await getData();
    });

    test('Get data axios empty url', async () => {
        const data = await getDataAxios();
    });
});

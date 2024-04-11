// как только мокаю эти пакеты сразу ругань будет // Cannot read properties of undefined (reading 'then')
import axios from 'axios';
import getData, { getDataAxios } from '../get-data';

jest.mock('node-fetch');
jest.mock('axios');

describe('Get Data', () => {
    let res;

    beforeAll(() => {
        res = {
            data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
        };
    });

    test('Get data fetch empty url', async () => {
        // так ну тут замес в том что мокаю запросы axios и считаю количество вызовов + соответсвтие на возвращаемый результат
        axios.get.mockResolvedValue(res);
        const data = await getDataAxios();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(res);
        // эта тема сохраняет snapshot запроса чтобы если кто-то поменяет res тест упал
        expect(data).toMatchSnapshot(res);
    });
});

import { findAllByTestId, render, screen, waitFor } from '@testing-library/react';
import UsersTest from '../users-test.component';

const MOCK_USERS = [
    {
        id: 1,
        name: 'Max',
    },
    {
        id: 2,
        name: 'Max2',
    },
];

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve(MOCK_USERS),
//     })
// );

beforeEach(() =>
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(MOCK_USERS),
    })
);

afterEach(() => jest.restoreAllMocks());

// @see https://www.npmjs.com/package/jest-mock-fetch для доков по мокам fetch,
// пример с axios лежит тут packages/projects/tdd/src/unit/get-data/__test__/get-data-jest-mock.test.js

describe('Users test', () => {
    test('renders users', async () => {
        // ренберю элемент
        render(<UsersTest />);

        // жду появления user-list так как обернул в useEffect
        await waitFor(() => screen.getByTestId('user-list'));
        // проверяю что был запрос сюда https://jsonplaceholder.typicode.com/users
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
        // проверяю что он сделан 1 раз
        expect(fetch).toBeCalledTimes(1);
        // получаю юзеров
        const users = await screen.findAllByTestId('user-item');
        // так как замокал 2 ожидаю 2
        expect(users.length).toBe(2);

        // если надо отдебажить то
        // screen.debug(); // вернет всю разметку начиная с body
    });
});

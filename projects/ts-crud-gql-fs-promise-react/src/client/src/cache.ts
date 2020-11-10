import { InMemoryCache } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // так создаю локальную переменную
                isLoggedIn() {
                    return isLoggedInVar();
                },
            },
        },
    },
});

// can add default data
// cache.writeData({
//     data: {
//         isLoggedIn: !!localStorage.getItem('token'),
//     },
// });

// тут создаю переменную на уровне приложения и так как пока что авторизация не настоящая прокину просто тру
// export const isLoggedInVar = cache.makeVar<boolean>(!!localStorage.getItem('token'));
export const isLoggedInVar = cache.makeVar<boolean>(true);

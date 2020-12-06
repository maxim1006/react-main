import { InMemoryCache, makeVar, Reference } from '@apollo/client';
import { GetSkills_skills_items } from '../components/skill/list/__generated__/GetSkills';
import { FilterModel } from '../models/filter.model';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // так создаю локальную переменную
                isLoggedIn(...args) {
                    // console.log(args);
                    return isLoggedInVar();
                },
                isAdmin: {
                    read(_, { variables }) {
                        // The read function for the isInCart field
                        return localStorage.getItem('isAdmin');
                    },
                },
            },
        },
        // Могу создать отдельный локальный стейт и менять его как захочу, не забываем в typedefs.ts описать этот стейт
        Skills: {
            fields: {
                filteredItems: {
                    read(_, { readField, field }) {
                        const items: any = readField('items');
                        let filteredItems: GetSkills_skills_items[] = [];

                        if (items && Array.isArray(items)) {
                            filteredItems = items.filter((i: Reference) => {
                                const completed = readField('completed', i);
                                const skillFilterState = skillFilter();

                                switch (skillFilterState) {
                                    case 'All':
                                        return true;
                                    case 'Completed':
                                        return completed;
                                    case 'In progress':
                                        return !completed;
                                    default:
                                        return true;
                                }
                            });
                        }

                        return filteredItems;
                    },
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

// cache.writeQuery({
//     query: IS_LOGGED_IN,
//     data: {
//         isLoggedIn: !!localStorage.getItem("token"),
//     },
// });

// тут создаю переменную на уровне приложения и так как пока что авторизация не настоящая прокину просто тру
// export const isLoggedInVar = cache.makeVar<boolean>(!!localStorage.getItem('token'));
export const isLoggedInVar = cache.makeVar<boolean>(true);

// а так могу создать любую переменную reactive var
// посмотреть стейт skillFilter(), засетить skillFilter(someString)
export const skillFilter = makeVar<FilterModel>('All');

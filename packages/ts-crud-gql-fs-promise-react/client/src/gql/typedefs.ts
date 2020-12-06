import { gql } from '@apollo/client';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        isAdmin: Boolean!
    }
    #    тут создаю локальное поле с фильтрованными скилами
    extend type Skills {
        filteredItems: [Skill]
    }
    #    это нужно чтобы сказать что у меня есть локальная переменная которая тру, это пример с 2 переменными
    #    directive @client(isLoggedIn: Boolean, isAdmin: Boolean) on FIELD
`;

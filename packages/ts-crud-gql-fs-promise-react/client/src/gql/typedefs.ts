import { gql } from '@apollo/client';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
    #    это нужно чтобы сказать что у меня есть локальная переменная которая тру, это пример с 2 переменными
    directive @client(isLoggedIn: Boolean, new: Boolean) on FIELD
`;

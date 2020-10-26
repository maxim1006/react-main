import { gql } from 'apollo-server-core';

// тут подчеркивает изза того что в server/gql/schema.js уже типо есть гкл и он офигивает что может быть еще один
export const typeDefs = gql`
    type Query {
        hello: String!
        cats: [Cat]
    }
    type Cat {
        id: ID!
        name: String!
    }
    type Mutation {
        createCat(name: String!): Cat!
        deleteCat(name: String!): Boolean
    }
`;

import { gql } from 'apollo-server-express';

export const QueryTypeDefs = gql`
    type Query {
        #Family
        family: Family
        #Skills
        skills: Skills
        #Union
        getEntities(id: String!): Entities
    }
`;

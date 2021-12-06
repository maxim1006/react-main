import { gql } from 'apollo-server-express';

export const QueryTypeDefs = gql`
    type Query {
        #Family
        family: Family
        #Skills
        skills: Skills
        "Query to get tracks"
        tracks: [Track!]!
        "Union"
        getEntities(id: String!): Entities
    }
`;

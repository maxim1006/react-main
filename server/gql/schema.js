import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Payment {
        name: String!
    },
    type Query {
        payments: [Payment]
    }
`;

export default typeDefs;

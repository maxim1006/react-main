import { gql } from 'apollo-server-express';

export const ErrorTypeDefs = gql`
    type Error {
        message: String
        field: String
    }
`;

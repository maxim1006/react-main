import { gql } from '@apollo/client';

// если задаю так то обязательно должен в typeDefs прописать тип
export const IS_ADMIN = gql`
    query IsAdmin {
        isAdmin @client
    }
`;

import { gql } from 'apollo-server-express';

// пример union
export const EntitiesTypedefs = gql`
    union Entities = Skills | Family
`;

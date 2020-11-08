import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Error {
        message: String
        field: String
    }

    type Family {
        members: [FamilyMember]
        errors: [Error]
    }

    type FamilyMember {
        name: String!
        age: Float!
        id: String!
    }

    input FamilyMember {
        name: String!
        age: Float!
        id: String!
    }

    type DeleteFamilyMember {
        deleted: Boolean!
        errors: [Error]
    }

    type Query {
        #        hello: String
        family: Family
    }

    type Mutation {
        createFamilyMember(name: String!, age: Int!): Family
        updateFamilyMember(input: FamilyMember): Family
        deleteFamilyMember(id: String!): DeleteFamilyMember
    }
`;

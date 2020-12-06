import { gql } from 'apollo-server-express';

export const FamilyTypeDefs = gql`
    type Family {
        id: String!
        members: [FamilyMember]
        errors: [Error]
    }

    type FamilyMember {
        name: String!
        age: Float!
        id: String!
    }

    input FamilyMemberInput {
        name: String!
        age: Float!
        id: String!
    }

    type DeletedFamilyMember {
        deleted: Boolean!
        id: String!
        errors: [Error]
    }
`;

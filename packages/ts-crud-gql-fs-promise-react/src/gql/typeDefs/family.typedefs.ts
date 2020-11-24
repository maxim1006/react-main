import { gql } from 'apollo-server-express';

export const FamilyTypeDefs = gql`
    type Family {
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

    type DeleteFamilyMember {
        deleted: Boolean!
        id: String!
        errors: [Error]
    }
`;

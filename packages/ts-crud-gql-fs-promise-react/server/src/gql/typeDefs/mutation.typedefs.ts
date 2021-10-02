import { gql } from 'apollo-server-express';

export const MutationTypeDefs = gql`
    type Mutation {
        #Family
        createFamilyMember(name: String!, age: Int!): Family
        createFamilyMemberUnique(name: String!, age: Int!): FamilyMember
        updateFamilyMember(input: FamilyMemberInput): Family
        deleteFamilyMember(id: String!): DeletedFamilyMember

        #Skills
        createSkill(name: String!, completed: Boolean!): Skills
        updateSkill(input: SkillInput): Skills
        deleteSkill(id: String!): Skills
    }
`;

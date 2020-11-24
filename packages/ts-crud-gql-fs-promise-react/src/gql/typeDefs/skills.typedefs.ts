import { gql } from 'apollo-server-express';

export const SkillsTypeDefs = gql`
    type Skills {
        id: String!
        items: [Skill]
        errors: [Error]
    }

    type Skill {
        name: String!
        completed: Boolean!
        id: String!
    }

    input SkillInput {
        name: String!
        completed: Boolean!
        id: String!
    }

    type DeleteSkill {
        deleted: Boolean!
        id: String!
        errors: [Error]
    }
`;

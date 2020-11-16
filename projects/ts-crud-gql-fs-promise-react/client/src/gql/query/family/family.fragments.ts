import { gql } from '@apollo/client';

export const FamilyMemberFragment = {
    fragments: {
        main: gql`
            fragment FamilyMemberFragment on FamilyMember {
                id
                name
                age
            }
        `,
    },
};

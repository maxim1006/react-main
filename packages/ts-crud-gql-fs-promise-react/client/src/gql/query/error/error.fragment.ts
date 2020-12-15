import { gql } from '@apollo/client';

export const ErrorFragment = {
    fragments: {
        main: gql`
            fragment ErrorFragment on Error {
                message
                field
            }
        `,
    },
};

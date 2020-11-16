// isLoggedIn @client переменную беру из ./cache файла
// Querying local data from the Apollo cache is almost the same as querying remote data from a graph API.
// The only difference is that you add a @client directive to a local field to tell
// Apollo Client to pull it from the cache.
import { gql } from '@apollo/client';

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

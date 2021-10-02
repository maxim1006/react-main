import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { cache } from './cache';
import { typeDefs } from './typedefs';
import { GqlLink } from './gql-links';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: GqlLink,
    typeDefs,
    resolvers: {},
});

import { ApolloClient, from, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    let message: string | null = null;

    if (graphQLErrors) {
        message = graphQLErrors
            .map(({ message, locations, path }) => {
                return `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
            })
            .join(', ');
    }

    if (networkError) {
        message = `[Network error]: ${networkError}`;
    }

    globalErrorMessageVar({ message });
    forward(operation);
});

export const globalErrorMessageVar = makeVar<{ message: string | null }>({ message: null });

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
});

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    //  это default
    // cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
    // uri: 'http://localhost:3000/graphql',
    // тут перезаписываю как храниться кешь чтобы работало при одинаковых id
    cache: new InMemoryCache({
        typePolicies: {
            Cat: {
                keyFields: ['id', 'age'],
            },
        },
    }),
});

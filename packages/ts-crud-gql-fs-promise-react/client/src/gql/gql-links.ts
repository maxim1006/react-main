import { ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ServerError } from '@apollo/client/link/utils';

const getHttpLink = () => {
    const httpLinkOptions = {
        uri: 'http://localhost:4001/graphql',
    };
    return createHttpLink(httpLinkOptions);
};

const getAuthLink = () =>
    setContext(async (_, { headers }) => {
        const token = localStorage.getItem('token');
        return token
            ? {
                  headers: {
                      ...headers,
                      authorization: `Bearer ${token}`,
                  },
              }
            : {
                  headers,
              };
    });

const getErrorLink = () =>
    onError(({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(err => {
                console.log('===graphQLErrors===');
                console.log('code: ', err.extensions?.code);
                console.log('reason: ', err.extensions?.reason);
                console.log('message: ', err.message);
                console.log('path: ', err.path);
                // ErrorNotification(err.message);
                console.error(err.message);
            });
        }
        if (networkError) {
            switch ((networkError as ServerError).statusCode) {
                case 500:
                    console.log('Handle 500');
                    break;
                case 401:
                    console.log('Handle 401');
                    // tryConnectWithOfflineToken();
                    break;
                default:
                    console.log(`[Network error]: ${networkError.message}`);
                    break;
            }
            // if you would also like to retry automatically on
            // network errors, we recommend that you use
            // apollo-link-retry
            if (!localStorage.getItem('disableNotificationsOnGQLError')) {
                // ErrorNotification(networkError.message);
            }

            console.error(networkError.message);
        }
    });

export const GqlLink = ApolloLink.from([getErrorLink(), getAuthLink(), getHttpLink()]);

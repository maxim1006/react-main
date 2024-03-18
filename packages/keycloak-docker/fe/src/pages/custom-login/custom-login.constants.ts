export const AUTH_REALM = 'ec-external'; //alternative ability is to set name instead of id and usually bss has cpq tenant
export const AUTH_CLIENT_ID = 'implicit-flow-test';
export const AUTH_USER_ID = 'user_id';
export const LOGIN_EVENT_MESSAGE = 'afterLogin';

export enum AuthParam {
    Token = 'access_token',
    TokenType = 'token_type',
    SessionState = 'session_state',
    Expires = 'expires_in',
}

export const AUTH_ROUTES = {
    url: 'https://localhost:8443',
    tokenUrl: '/realms/' + AUTH_REALM + '/protocol/openid-connect/token',
    logoutUrl: '/realms/' + AUTH_REALM + '/protocol/openid-connect/logout',
    refreshToken:
        '/realms/' +
        AUTH_REALM +
        '/protocol/openid-connect/auth/?nonce=3&' +
        'client_id={client_id}&' +
        'redirect_uri={redirect_url}&' +
        'response_type=token',
    loginUrl:
        '/realms/' +
        AUTH_REALM +
        '/protocol/openid-connect/auth/?nonce=3&' +
        'client_id={client_id}&' +
        'response_type=token&' +
        'redirect_uri={redirect_url}',
    redirectUrl: '/custom-login?login=true',
};

export const SESSION_STORAGE_ACCESS_TOKEN_KEY = 'accessToken';

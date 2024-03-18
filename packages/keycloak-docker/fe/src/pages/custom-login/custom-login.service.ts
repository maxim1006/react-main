import { AUTH_CLIENT_ID, AUTH_USER_ID, AUTH_ROUTES, AuthParam } from './custom-login.constants.ts';
import { AccessToken } from './custom-login.models.ts';

class AuthLoginService {
    getAuthEndpoint = () => {
        const redirectUrl = encodeURI(this.getPath(AUTH_ROUTES.redirectUrl));

        return (
            AUTH_ROUTES.url +
            AUTH_ROUTES.loginUrl
                .replace('{redirect_url}', redirectUrl)
                .replace('{client_id}', AUTH_CLIENT_ID)
        );
    };

    getLogoutEndpoint = () => {
        return AUTH_ROUTES.url + AUTH_ROUTES.logoutUrl;
    };

    getPath = (resource: string) => {
        return window.location.protocol + '//' + window.location.host + resource;
    };

    parseJwt = (token: string): object => {
        const base64Url: string = token.split('.')[1];
        const base64: string = base64Url.replace('-', '+').replace('_', '/');

        return JSON.parse(window.atob(base64).replace(AUTH_USER_ID, 'customerId'));
    };

    getAccessTokenEntity = (hash: string): AccessToken => {
        hash = hash.replace('#', '');

        const elements: string[] = hash.split('&');
        const authParamsMap: Map<string, string> = new Map<string, string>();

        elements.forEach((element: string) => {
            const param: string[] = element.split('=');
            authParamsMap.set(param[0], param[1]);
        });

        const expiresParam: string | undefined = authParamsMap.get(AuthParam.Expires);
        const expiresIn: number = expiresParam ? parseInt(expiresParam) : 0;

        return {
            accessToken: authParamsMap.get(AuthParam.Token) ?? '',
            expiryDateTime: Date.now() + expiresIn * 1000,
            tokenType: authParamsMap.get(AuthParam.TokenType) ?? '',
            sessionState: authParamsMap.get(AuthParam.SessionState) ?? '',
            expiresIn,
        };
    };

    logoutFromIdp = async () => {
        try {
            await fetch(this.getLogoutEndpoint(), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                credentials: 'include',
                mode: 'no-cors',
            });
        } catch (e) {
            console.error('AuthLoginService logout error: ', e);
        }
    };
}

export const authLoginService = new AuthLoginService();

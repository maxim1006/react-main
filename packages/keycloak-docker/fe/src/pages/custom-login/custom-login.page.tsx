import { FC, memo, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { LOGIN_EVENT_MESSAGE, SESSION_STORAGE_ACCESS_TOKEN_KEY } from './custom-login.constants.ts';
import { authLoginService } from './custom-login.service.ts';
import './custom-login-page.css';
import { useNavigate } from 'react-router-dom';
import { AccessToken } from './custom-login.models.ts';
import sessionStorageService from '../../services/session-storage.service.ts';

type CustomLoginPageProps = NonNullable<unknown>;

const { parseJwt, getAccessTokenEntity, logoutFromIdp } = authLoginService;

const CustomLoginPage: FC<CustomLoginPageProps> = () => {
    const navigate = useNavigate();
    const isIframe = window.top !== window;

    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const ref = useRef<HTMLIFrameElement>(null);

    useLayoutEffect(() => {
        if (isIframe) {
            const postData = {
                eventType: LOGIN_EVENT_MESSAGE,
                data: decodeURIComponent(window.location.hash),
            };
            // change '*' to your targetOrigin https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
            if (window.top) {
                window.top.postMessage(postData, '*');
            }
        }

        isIframe &&
            window.dispatchEvent(
                new CustomEvent(LOGIN_EVENT_MESSAGE, {
                    detail: {},
                }),
            );
    }, [isIframe]);

    useLayoutEffect(() => {
        const onLoginMessage = async (event: MessageEvent) => {
            if (event?.data.eventType === LOGIN_EVENT_MESSAGE) {
                const decodedToken: any = parseJwt(event.data.data);
                const token: AccessToken = getAccessTokenEntity(event.data.data);

                if (!loggedIn) {
                    setLoggedIn(true);

                    sessionStorageService.setItem(
                        SESSION_STORAGE_ACCESS_TOKEN_KEY,
                        token.accessToken,
                    );
                    const userId = decodedToken.sub;
                    console.log({ userId, accessToken: token.accessToken });
                }
            }
        };

        window.addEventListener('message', onLoginMessage);
        return () => window.removeEventListener('message', onLoginMessage);
    }, [loggedIn, setLoggedIn]);

    const logout = async () => {
        await logoutFromIdp();
        sessionStorageService.removeItem(SESSION_STORAGE_ACCESS_TOKEN_KEY);
        setLoggedIn(false);
        navigate('/');
    };

    useLayoutEffect(() => {
        const onLoad = () => setLoading(false);
        const currentRef: HTMLIFrameElement | null = ref?.current;
        currentRef?.addEventListener('load', onLoad);
        return () => currentRef?.removeEventListener('load', onLoad);
    }, []);

    return (
        <div className={cn('taCustomLoginPage')}>
            <div className={cn('taCustomLoginContainer')}>
                <button type='button' onClick={() => logout()}>
                    logout
                </button>
                {!loggedIn && !isIframe && (
                    <iframe
                        className='iframe'
                        src={authLoginService.getAuthEndpoint()}
                        ref={ref}
                        id='loginFrame'
                        title='loginFrame'
                        hidden={loading}
                    />
                )}
            </div>
        </div>
    );
};

export default memo(CustomLoginPage);

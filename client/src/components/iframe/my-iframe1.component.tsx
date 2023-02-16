import React, { memo, FC, useEffect } from 'react';
import styles from './my-iframe1.module.scss';
import cn from 'classnames';
import { __prod__ } from '@app/constants/common.constants';

type MyIframe1Props = {};

const MyIframe1: FC<MyIframe1Props> = () => {
    useEffect(() => {
        createIframe();

        (async () => {
            const message = await getMessage();
            console.log({ message });
        })();
    }, []);

    return <div className={cn(styles.host, 'taMyIframe1')}>parent Iframe1</div>;
};

export default memo(MyIframe1);

const IFRAME1_ID = 'iframe-id';

enum Iframe1MessageEnum {
    Request = 'Iframe1Request',
    Response = 'Iframe1Response',
}

function createIframe() {
    const googleMapsIframe = document.querySelector(`#${IFRAME1_ID}`);

    if (googleMapsIframe) {
        if (__prod__) {
            console.error('[createIframe] iframe already exists');
        }
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.id = IFRAME1_ID;
    iframe.src = `${process.env.PUBLIC_URL}/iframe1.html`;
    // iframe.style.display = 'none';
    document.body.appendChild(iframe);
}

function getMessage() {
    return new Promise<number>(resolve => {
        const iframe: HTMLIFrameElement | null = document.querySelector(`#${IFRAME1_ID}`);

        if (!iframe) return console.error('iframe is not found');

        // тут ловлю эвент из iframe
        function handler(event: MessageEvent) {
            if (event.origin !== window.location.origin)
                return console.error('Event origin does not match with window origin');

            if (event.data.message === Iframe1MessageEnum.Response) {
                console.log('handle message in top window');

                resolve(JSON.parse(event.data.value));
                iframe?.remove();
                window.removeEventListener('message', handler);
            }
        }

        window.addEventListener('message', handler);

        // обернул в settimeout чтобы iframe успел прогрузиться
        setTimeout(() => {
            // тут делаю запрос внутрь айфрейма там его ловлю в event.data
            iframe.contentWindow?.postMessage(
                {
                    message: Iframe1MessageEnum.Request,
                    value: JSON.stringify({ message: 'Hi mom' }),
                },
                window.location.origin
            );
        }, 500);
    });
}

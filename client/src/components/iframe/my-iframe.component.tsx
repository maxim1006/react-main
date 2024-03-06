import React, { memo, FC, useEffect } from 'react';

type MyIframeProps = {};

/*
- делаю форму в iframe
- кидаю с ее помощью пост запрос
- ловлю в fetch.router
- отпускаю  fetch('http://localhost:3001/api/v1/fetch/iframe')
- кидаю postMessage
- ловлю  postMessage
*/

const MyIframe: FC<MyIframeProps> = () => {
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/fetch/iframe')
            .then(res => res.json())
            .then(res => {
                console.log('fetch', { res });
                window.top?.postMessage(
                    {
                        message: 'iframeResponse',
                        value: {
                            text: 'Hi mom',
                        },
                    },
                    window.top.location.origin
                );
            });
    }, []);

    useEffect(() => {
        getResponse({
            name: 'Max',
        }).then(res => {
            console.log(res);
        });
    }, []);

    return <div>MyIframe</div>;
};

export default memo(MyIframe);

const getResponse = async (data: { [key: string]: string }): Promise<{}> => {
    const iframe = document.createElement('iframe');
    iframe.srcdoc = getIframeContent('http://localhost:3001/api/v1/fetch/iframe-form', JSON.stringify(data));
    document.body.appendChild(iframe);

    return new Promise((resolve, reject) => {
        const iFrameTimeout = setTimeout(() => {
            iframe.remove();
            window.removeEventListener('message', messageEventListener);
            reject('iframe request timeout');
        }, 100000);

        const messageEventListener = (event: MessageEvent) => {
            if (event.data.message === 'iframeResponse') {
                iframe.remove();
                window.removeEventListener('message', messageEventListener);
                window.clearTimeout(iFrameTimeout);
                resolve(event.data.value);
            }
        };

        window.addEventListener('message', messageEventListener);
    });
};

const getIframeContent = (url: string, data: string) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    </head>

    <body>
        <form
            method='POST'
            id='iframe-form'
            action='${url}'
        ></form>

        <script type='text/javascript'>
            const formElement = document.getElementById("iframe-form");
            const data = ${data};

            Object.entries(data).forEach(([key, value]) => {
                const inputElement = document.createElement("input");
                inputElement.name = key;
                inputElement.value = value;
                inputElement.type = "hidden";
                formElement.appendChild(inputElement);
            });

            formElement.submit();
        </script>
    </body>
    </html>
`;

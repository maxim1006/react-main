'use client';

import React, { FC, lazy, memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { injectScript } from '@module-federation/nextjs-mf/utils';

type ClientProxyProps = {};

const RemoteTitleDynamic = dynamic(
    async () => {
        const remoteContainer = await injectScript({
            global: 'widget',
            url: 'http://localhost:3301/_next/static/chunks/remoteEntryWidget.js',
        });
        const factory = await remoteContainer.get('./titleClient');
        const exportedModule = factory();
        return { default: exportedModule.default };
    },
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
);

const ClientProxy: FC<ClientProxyProps> = () => {
    // https://stackoverflow.com/questions/75094010/nextjs-13-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    });

    return (
        <div className={'taClientProxy'}>
            Client Proxy
            {mount && <RemoteTitleDynamic />}
        </div>
    );
};

export default memo(ClientProxy);

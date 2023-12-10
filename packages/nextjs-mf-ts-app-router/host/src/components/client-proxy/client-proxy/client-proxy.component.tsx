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

const RemoteCraTitleServer1 = dynamic(
    async () => {
        const remoteContainer = await injectScript({
            global: 'craWidget',
            url: 'http://localhost:3302/remoteEntryWidget.js',
        });
        const factory = await remoteContainer.get('./CraTitleServer');
        const exportedModule = factory();
        return { default: exportedModule.default };
    },
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
);

const RemoteCraTitleClient1 = dynamic(
    async () => {
        const remoteContainer = await injectScript({
            global: 'craWidget',
            url: 'http://localhost:3302/remoteEntryWidget.js',
        });
        const factory = await remoteContainer.get('./CraTitleClient');
        const exportedModule = factory();
        return { default: exportedModule.default };
    },
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
);
//
// const RemoteCraTitleServer = lazy(() => import('craWidget/CraTitleServer' as string));
// const RemoteCraTitleClient = lazy(() => import('craWidget/CraTitleClient' as string));

const RemoteCraTitleServer2 = dynamic(
    () => import('craWidget/CraTitleServer' as string).then(ctx => ctx.default),
    {
        ssr: false,
    }
);

const RemoteServerTitle = lazy(() => import('widget/titleServer' as string));
const RemoteClientTitle = lazy(() => import('widget/titleClient' as string));

const ClientProxy: FC<ClientProxyProps> = () => {
    // https://stackoverflow.com/questions/75094010/nextjs-13-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
    const [mount, setMount] = useState(false);
    //
    useEffect(() => {
        setMount(true);
    });

    return (
        <div className={'taClientProxy'}>
            Client Proxy
            {mount && <RemoteTitleDynamic />}
            {/*<RemoteCraTitleServer />*/}
            <RemoteCraTitleServer1 />
            {/*<RemoteCraTitleClient />*/}
            <RemoteCraTitleClient1 />
            {mount && <RemoteServerTitle />}
            <br />
            {mount && <RemoteClientTitle />}
        </div>
    );
};

export default memo(ClientProxy);

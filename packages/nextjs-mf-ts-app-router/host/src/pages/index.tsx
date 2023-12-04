import React, { lazy } from 'react';
import Head from 'next/head';
import ClientProxy from '@/components/client-proxy/client-proxy/client-proxy.component';

const RemoteServerTitle = lazy(() => import('widget/titleServer' as string));
const RemoteClientTitle = lazy(() => import('widget/titleClient' as string));

const Home = () => {
    if (process.browser) {
        // useCustomHook();
    }

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <ClientProxy />
            <RemoteServerTitle />
            <RemoteClientTitle />
        </div>
    );
};
//
Home.getInitialProps = async () => {
    return {};
};

export default Home;

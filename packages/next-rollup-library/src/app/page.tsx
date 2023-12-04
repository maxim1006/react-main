import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { dynamicUrlImportServer } from '@/src/utils/dynamic-import-server';
import React from 'react';
import ClientFooter from '@/src/components/client-footer/client-footer.component';

const ServerFooter = dynamic(
    async () => {
        const { FooterServerUmd } = await dynamicUrlImportServer(
            'http://127.0.0.1:8080/FooterServerUmd.js'
        );
        console.log({ FooterServerUmd });
        return { default: FooterServerUmd.ServerFooter };
    },
    {
        ssr: true,
    }
);

export default async function Home() {
    const obj: any = {};

    const { FooterClientUmd } = await dynamicUrlImportServer(
        'http://127.0.0.1:8080/FooterClientUmd.js'
    );

    obj.current = FooterClientUmd.ClientFooter;

    return (
        <main className={styles.main}>
            <ServerFooter />
            <ClientFooter />
        </main>
    );
}

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { dynamicUrlImportServer } from '@/src/utils/dynamic-import-server';
import React from 'react';
import ClientFooter from '@/src/components/client-footer/client-footer.component';

const ServerFooter = dynamic(
    async () => {
        const { FooterUmd } = await dynamicUrlImportServer('http://127.0.0.1:8080/FooterUmd.js');
        console.log({ FooterUmd });
        return { default: FooterUmd.ServerFooter };
    },
    {
        ssr: true,
    }
);

export default function Home() {
    return (
        <main className={styles.main}>
            <ServerFooter />
            <ClientFooter />
        </main>
    );
}

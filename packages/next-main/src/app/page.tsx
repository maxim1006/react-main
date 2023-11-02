import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Initial page title',
    description: 'Initial page description',
};

export default function Home() {
    return (
        <>
            <p>Index Page</p>
            <Link href='/#scrollTest'>Scroll Test link</Link>&nbsp;
            <Link href='/#scrollTestDisabled' scroll={false}>
                Scroll Test link disabled
            </Link>
            <div className={styles.scrollTest} id='scrollTest'>
                scrollTest
            </div>
            <div className={styles.scrollTest} id='scrollTest'>
                scrollTestDisabled
            </div>
        </>
    );
}

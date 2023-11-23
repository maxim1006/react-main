import { Metadata } from 'next';
import React, { FC } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { LangModel } from '@/models/lang.model';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
    title: 'Home page title',
    description: 'Home page description',
};

type HomeAppPageProps = {
    params: LangModel;
};

const HomeAppPage: FC<HomeAppPageProps> = ({ params: { lang } }) => {
    unstable_setRequestLocale(lang);

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
};

export default HomeAppPage;

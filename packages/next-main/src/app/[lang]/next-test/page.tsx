import React, { FC } from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import NextTestPage from '@/pages/next-test.page';
import { LangModel } from '@/models/lang.model';

export const metadata: Metadata = {
    title: 'Next Test Page',
    description: 'Next Test Page',
};

type NextTestAppPageProps = {
    params: LangModel;
};

const NextTestAppPage: FC<NextTestAppPageProps> = ({ params: { lang } }) => {
    unstable_setRequestLocale(lang);

    return <NextTestPage />;
};

export default NextTestAppPage;

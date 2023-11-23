import React, { memo, FC } from 'react';
import MyAboutClient from '@/components/client/about/about.component';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LangModel } from '@/models/lang.model';

type AboutPageProps = {
    params: LangModel;
};

const AboutPage: FC<AboutPageProps> = ({ params: { lang } }) => {
    unstable_setRequestLocale(lang);

    return (
        <div>
            AboutPage
            <MyAboutClient />
        </div>
    );
};

export default memo(AboutPage);

import React, { FC, memo } from 'react';
import AboutInnerClient from '@/components/client/about/inner/about-inner.component';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LangModel } from '@/models/lang.model';

type AboutInnerPageProps = {
    params: LangModel;
};

const AboutInnerPage: FC<AboutInnerPageProps> = ({ params: { lang } }) => {
    unstable_setRequestLocale(lang);

    return (
        <div>
            AboutInnerPage
            <AboutInnerClient />
        </div>
    );
};

export default memo(AboutInnerPage);

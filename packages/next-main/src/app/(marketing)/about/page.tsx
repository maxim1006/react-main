import React, { memo, FC } from 'react';
import MyAboutClient from '@/components/client/about/about.component';
type AboutPageProps = {};

const AboutPage: FC<AboutPageProps> = () => {
    return (
        <div>
            AboutPage
            <MyAboutClient />
        </div>
    );
};

export default memo(AboutPage);

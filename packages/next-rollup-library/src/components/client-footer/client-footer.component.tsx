'use client';

import { FC, memo } from 'react';
import Footer from 'http://127.0.0.1:8080/footer/client/client-footer.component.js';

type ClientProxyProps = {};

const ClientFooter: FC<ClientProxyProps> = () => {
    return <Footer />;
};

export default memo(ClientFooter);

// alternative loading
// const Footer = dynamic(() => import('http://127.0.0.1:8080/footer/footer.component.js' as string), {
//     loading: () => <p>Loading...</p>,
// });

// development-20231121.152428-68

import { Inter } from 'next/font/google';
import React, { FC, ReactNode } from 'react';
import MainNavClient from '@/components/client/nav/main/main-nav.component';
import '@/common/styles/globals.scss';
import styles from './page.module.scss';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { LangModel } from '@/models/lang.model';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { CssBaseline } from '@mui/material';
import { ThemeClientProviders } from '@common/theme/theme.provider';

const inter = Inter({ subsets: ['latin'] });

async function getMessages(locale: string) {
    try {
        return (await import(`./../../locales/${locale}.json`)).default;
    } catch (e) {
        notFound();
    }
}

export function generateStaticParams() {
    return locales.map(lang => ({ lang }));
}

type AppLayoutProps = {
    children: ReactNode;
    params: LangModel;
};

const AppLayout: FC<AppLayoutProps> = async ({ children, params }) => {
    const isValidLocale = locales.some(cur => cur === params?.lang);

    if (!isValidLocale) notFound();

    unstable_setRequestLocale(params.lang);

    console.log('params.lang ', params.lang);

    const messages = await getMessages(params.lang);

    return (
        <NextIntlClientProvider locale={params.lang} messages={messages}>
            <html lang={params.lang}>
                <body className={inter.className}>
                    <ThemeClientProviders>
                        <CssBaseline />

                        <header>
                            <MainNavClient />
                        </header>
                        <main className={styles.main}>{children}</main>
                    </ThemeClientProviders>
                </body>
            </html>
        </NextIntlClientProvider>
    );
};

export default AppLayout;

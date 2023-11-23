import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'];
export const defaultLocale: string = 'en';

export const LOCALE_COOKIE_NAME: any = 'NEXT_LOCALE';

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./locales/${locale}.json`)).default,
}));

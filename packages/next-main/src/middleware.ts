import { defaultLocale, locales } from '@/i18n';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
});

export default async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/health') {
        return NextResponse.json({ status: 'UP' });
    }

    if (request.nextUrl.pathname.startsWith('/api')) {
        request.headers.delete('Origin');

        return NextResponse.rewrite(
            new URL(`${process.env.API_URL}${request.nextUrl.pathname}${request.nextUrl.search}`),
            { request }
        );
    }

    return handleI18nRouting(request);
}

// https://nextjs.org/docs/app/building-your-application/routing/middleware нужно для матчинга всех путей
export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/api/graphql-server/graphql', '/api/(.*)'],
};

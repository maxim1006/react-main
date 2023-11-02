import React, { ReactNode } from 'react';
import MyAboutClient from '@/components/client/about/about.component';

// могут быть и внутренние лейауты
export default function AboutInnerLayout({ children }: { children: ReactNode }) {
    return (
        <section>
            About inner Layout
            {children}
        </section>
    );
}

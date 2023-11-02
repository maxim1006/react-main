import React, { ReactNode } from 'react';

// могут быть и внутренние лейауты
export default function MarketingLayout({ children }: { children: ReactNode }) {
    return <section className='marketing-layout'>{children}</section>;
}

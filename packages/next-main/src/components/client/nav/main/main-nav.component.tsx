'use client';

import React, { memo, FC } from 'react';
import styles from './main-nav-client.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import { ABOUT_INNER_ROUTE, ABOUT_ROUTE, MAIN_ROUTE } from '@/constants/route.constants';
import { useLocale } from 'use-intl';
import LocaleSwitcherClient from '@/components/client/locale-switcher/locale-switcher.component';

type MainNavClientProps = {};

const MainNavClient: FC<MainNavClientProps> = () => {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const getLinkClassName = (linkPathname: string) =>
        cn(styles.link, {
            [styles.linkActive]: pathname === linkPathname,
        });

    return (
        <div className={cn(styles.host, 'taMainNavClient')}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={getLinkClassName('/')}>
                        <Link href={MAIN_ROUTE}>Home</Link>
                        <br />
                        <button type='button' onClick={() => router.push('/')}>
                            Home By Router
                        </button>
                    </li>
                    <li>
                        <div className={getLinkClassName(ABOUT_ROUTE)}>
                            <Link href={ABOUT_ROUTE}>About</Link>
                            <br />
                            <button type='button' onClick={() => router.push(ABOUT_ROUTE)}>
                                About By Router
                            </button>
                        </div>
                        <div className={getLinkClassName(ABOUT_INNER_ROUTE)}>
                            <Link href={ABOUT_INNER_ROUTE}>About Inner</Link>
                            <br />
                            <button type='button' onClick={() => router.push(ABOUT_INNER_ROUTE)}>
                                About Inner By Router
                            </button>
                        </div>
                    </li>
                    <li>
                        <LocaleSwitcherClient />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default memo(MainNavClient);

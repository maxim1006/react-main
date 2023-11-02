'use client';

import React, { memo, FC } from 'react';
import styles from './main-nav-client.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type MainNavClientProps = {};

const MainNavClient: FC<MainNavClientProps> = () => {
    const pathname = usePathname();
    const router = useRouter();

    console.log({ pathname });

    const getLinkClassName = (linkPathname: string) =>
        cn(styles.link, {
            [styles.linkActive]: pathname === linkPathname,
        });

    return (
        <div className={cn(styles.host, 'taMainNavClient')}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={getLinkClassName('/')}>
                        <Link href='/'>Home</Link>
                        <br />
                        <button type='button' onClick={() => router.push('/')}>
                            Home By Router
                        </button>
                    </li>
                    <li className={getLinkClassName('/about')}>
                        <Link href='/about'>About</Link>
                        <br />
                        <button type='button' onClick={() => router.push('/about')}>
                            About By Router
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default memo(MainNavClient);

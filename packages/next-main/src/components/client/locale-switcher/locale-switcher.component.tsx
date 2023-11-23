import React, { memo, FC } from 'react';
import cn from 'classnames';
import { locales } from '@/i18n';
import { Link } from '@mui/material';
import { useLocale, useTranslations } from 'use-intl';
import { usePathname } from 'next-intl/client';

// ОМГ надо использовать именно { usePathname } from 'next-intl/client'; а не из некста ппц !!!!!!!!!

type LocaleSwitcherClientProps = {};

const LocaleSwitcherClient: FC<LocaleSwitcherClientProps> = () => {
    const t = useTranslations();
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <div className={cn('taLocaleSwitcherClient')}>
            Current locale: {locale}
            <p>
                {locales.map((language: string, idx) => (
                    <Link key={idx} href={pathname} {...({ locale: language } as any)}>
                        {t(`language.${language}`)}
                    </Link>
                ))}
            </p>
            <p>{t(`common.welcome`)}</p>
        </div>
    );
};

export default memo(LocaleSwitcherClient);

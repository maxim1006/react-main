import React, { memo, FC } from 'react';
import styles from './external-link.module.scss';
import cn from 'classnames';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

type ExternalLinkProps = {};

const ExternalLink: FC<ExternalLinkProps> = () => {
    const url = new URL('/route', window.location.origin);

    url.searchParams.append('param', 'value');

    return (
        <a href={url.href} target='_blank' rel='noopener noreferrer' className={cn(styles.host, 'taTaxInvoiceLink')}>
            <span className={styles.text}>external link</span>
            <UserIcon className={styles.icon} />
        </a>
    );
};

export default memo(ExternalLink);

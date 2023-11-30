import { memo, FC } from 'react';
import cn from 'classnames';

type ClientFooterProps = {};

const ClientFooter: FC<ClientFooterProps> = () => {
    return <div className={cn('taClientFooter')}>ClientFooter+++++</div>;
};

export default memo(ClientFooter);

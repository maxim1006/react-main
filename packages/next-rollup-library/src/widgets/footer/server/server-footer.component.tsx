import { memo, FC } from 'react';
import cn from 'classnames';

type ServerFooterProps = {};

const ServerFooter: FC<ServerFooterProps> = () => {
    return <div className={cn('taServerFooter')}>ServerFooter-----</div>;
};

export default memo(ServerFooter);

import { memo, FC } from 'react';
import cn from 'classnames';

type ErrorPageProps = {};

const ErrorPage: FC<ErrorPageProps> = () => {
    return <div className={cn('taErrorPage')}>ErrorPage</div>;
};

export default memo(ErrorPage);

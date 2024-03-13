import { memo, FC } from 'react';
import cn from 'classnames';

type IndexPageProps = {};

const IndexPage: FC<IndexPageProps> = () => {
    return <div className={cn('taIndexPage')}>IndexPage</div>;
};

export default memo(IndexPage);

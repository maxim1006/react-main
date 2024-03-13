import { memo, FC } from 'react';
import cn from 'classnames';

type AboutPageProps = {};

const AboutPage: FC<AboutPageProps> = () => {
    return <div className={cn('taAboutPage')}>AboutPage</div>;
};

export default memo(AboutPage);

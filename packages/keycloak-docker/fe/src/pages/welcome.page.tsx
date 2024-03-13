import { memo, FC } from 'react';
import cn from 'classnames';

type WelcomePageProps = {};

const WelcomePage: FC<WelcomePageProps> = () => {
    return <div className={cn('taWelcomePage')}>WelcomePage</div>;
};

export default memo(WelcomePage);

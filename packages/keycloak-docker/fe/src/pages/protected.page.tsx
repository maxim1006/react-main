import { FC, memo, useLayoutEffect } from 'react';
import cn from 'classnames';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';

type ProtectedPageProps = NonNullable<unknown>;

const ProtectedPage: FC<ProtectedPageProps> = () => {
    const navigate = useNavigate();

    const { keycloak } = useKeycloak();

    useLayoutEffect(() => {
        if (!keycloak.authenticated) {
            navigate('/');
            return;
        }
    }, [keycloak.authenticated, navigate]);

    return <div className={cn('taProtectedPage')}>ProtectedPage</div>;
};

export default memo(ProtectedPage);

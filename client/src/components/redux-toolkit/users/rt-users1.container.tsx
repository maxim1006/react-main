import React, { memo } from 'react';
import { userApi } from '@app/redux-toolkit/query/user.api';
import MaterialLoader from '../../loader/MaterialLoader';

type RtUsersContainerProps = {};

const RtUsersContainer1 = memo<RtUsersContainerProps>(function RtUsersContainer() {
    const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery();

    if (error) return null;

    return isLoading ? (
        <MaterialLoader />
    ) : (
        <div>
            {Object.values(users)?.map(i => (
                <div key={i.id}>Name: {i.name}</div>
            ))}
        </div>
    );
});

export default RtUsersContainer1;

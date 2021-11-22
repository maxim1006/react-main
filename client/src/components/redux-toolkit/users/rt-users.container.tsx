import React, { memo } from 'react';
import { userApi } from '@app/redux-toolkit/query/user.query';

type RtUsersContainerProps = {};

const RtUsersContainer = memo<RtUsersContainerProps>(function RtUsersContainer() {
    console.log({ userApi });

    // const {} = userApi;
    return <div>RtUsersContainer</div>;
});

export default RtUsersContainer;

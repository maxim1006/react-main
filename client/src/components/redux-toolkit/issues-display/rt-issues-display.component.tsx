import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RtRootState } from '../../../redux-toolkit/rt-configureStore';

const RtIssuesDisplay = () => {
    const { org, displayType, page } = useSelector((state: RtRootState) => state.issuesDisplay);

    return <>{`${org} ${displayType} ${page}`}</>;
};

export default memo(RtIssuesDisplay);

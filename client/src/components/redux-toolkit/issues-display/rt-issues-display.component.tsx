import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RtRootState } from '../../../redux-toolkit/rt-configureStore';

const RtIssuesDisplay = () => {
    const dispatch = useDispatch();
    const { org, repo, displayType, page, issueId } = useSelector((state: RtRootState) => state.issuesDisplay);

    return <>{`${org} ${displayType} ${page}`}</>;
};

export default memo(RtIssuesDisplay);

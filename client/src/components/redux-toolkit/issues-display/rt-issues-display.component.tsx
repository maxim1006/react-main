import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';

const RtIssuesDisplay = () => {
    const { org, displayType, page } = useSelector((state: RootState) => state.issuesDisplay);

    return <>{`${org} ${displayType} ${page}`}</>;
};

export default memo(RtIssuesDisplay);

import { memo, useContext } from 'react';
import { StyledGeneralInfo, StyledGeneralInfoList, StyledGeneralInfoListItem } from './StyledGeneralInfo';
import { GeneralInfoContext } from '@app/components/context/general-info.context';

export default memo(() => {
    const { device, browser } = useContext(GeneralInfoContext);

    return (
        <StyledGeneralInfo>
            <StyledGeneralInfoList>
                <StyledGeneralInfoListItem>Device: {device}</StyledGeneralInfoListItem>
                <StyledGeneralInfoListItem>Browser: {browser}</StyledGeneralInfoListItem>
            </StyledGeneralInfoList>
        </StyledGeneralInfo>
    );
});

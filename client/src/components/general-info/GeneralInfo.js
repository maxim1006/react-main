import React, { memo, useContext } from 'react';
import GeneralInfoContext from '../../context/GeneralInfoContext';
import { StyledGeneralInfo, StyledGeneralInfoList, StyledGeneralInfoListItem } from './StyledGeneralInfo';

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

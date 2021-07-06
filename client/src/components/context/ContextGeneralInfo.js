import React, { memo } from 'react';
import GeneralInfoContext from '../../context/GeneralInfoContext';
import useGeneralInfo from '../hooks/useGeneralInfo';
import ThemeSelector from '../theme/ThemeSelector';
import { ThemeContextStore } from '../theme/ThemeContextStore';

export default memo(({ children }) => {
    const { device, browser } = useGeneralInfo();

    return (
        <GeneralInfoContext.Provider value={{ device, browser }}>
            <ThemeContextStore>
                {/* Связываю ThemeContextStore с ThemeSelector через context*/}
                <ThemeSelector />

                {children}
            </ThemeContextStore>
        </GeneralInfoContext.Provider>
    );
});

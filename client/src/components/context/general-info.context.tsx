import React, { createContext, ReactNode } from 'react';
import useGeneralInfo from '@app/components/hooks-components/useGeneralInfo';
import { ThemeContextStore } from '@app/components/theme/ThemeContextStore';
import ThemeSelector from '@app/components/theme/ThemeSelector';
import { DeviceEnum } from '@app/models/common.model';

interface GeneralInfoContextModel {
    device?: DeviceEnum;
    browser?: string;
}

export const GeneralInfoContext = createContext({} as GeneralInfoContextModel);

type GeneralInfoProviderProps = { children?: ReactNode };

export const GeneralInfoProvider = ({ children }: GeneralInfoProviderProps) => {
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
};

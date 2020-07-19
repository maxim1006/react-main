import React, { memo } from "react";
import ReactIntlComponent from "../components/react-intl/react-intl.component";
import { TabsComponent } from "../components/tabs/Tabs";
import I18nJsComponent from "../components/i18n-js/i18n-js.component";

const IntlPage = () => {
    return (
        <TabsComponent>
            <div tabName="i18n-js">
                <I18nJsComponent />
            </div>
            <div tabName="react-intl">
                <ReactIntlComponent />
            </div>
        </TabsComponent>
    );
};

export default memo(IntlPage);

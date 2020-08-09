import React, { memo } from "react";
import { TabsComponent } from "../tabs/Tabs";
import PerformanceUseMemo from "../performance/performance-use-memo.component";
import ReduxSagaIntroComponent from "./intro/redux-saga-intro.component";

const ReduxSaga = () => {
    return (
        <>
            <TabsComponent>
                <div tabName="Intro">
                    <ReduxSagaIntroComponent />
                </div>
            </TabsComponent>
        </>
    );
};

export default memo(ReduxSaga);

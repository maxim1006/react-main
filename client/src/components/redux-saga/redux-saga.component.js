import React, { memo } from "react";
import { TabsComponent } from "../tabs/Tabs";
import ReduxSagaIntroComponent from "./intro/redux-saga-intro.component";
import FamilySagaComponent from "./family/family-saga.component";

const ReduxSaga = () => {
    return (
        <>
            <TabsComponent activeTab={1}>
                <div tabName="Intro">
                    <ReduxSagaIntroComponent />
                </div>
                <div tabName="Family">
                    <FamilySagaComponent />
                </div>
            </TabsComponent>
        </>
    );
};

export default memo(ReduxSaga);

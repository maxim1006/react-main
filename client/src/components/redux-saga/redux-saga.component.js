import { memo } from 'react';
import { TabsComponent } from '../tabs/Tabs';
import ReduxSagaIntroComponent from './intro/redux-saga-intro.component';
import FamilySagaComponent from './family/family-saga.component';
import SagaCounterComponent from './counter/saga-counter.component';

const ReduxSaga = () => {
    return (
        <>
            <TabsComponent>
                <div tabName='Counter'>
                    <SagaCounterComponent />
                </div>
                <div tabName='Intro'>
                    <ReduxSagaIntroComponent />
                </div>
                <div tabName='Family'>
                    <FamilySagaComponent />
                </div>
            </TabsComponent>
        </>
    );
};

export default memo(ReduxSaga);

import React, { memo } from 'react';
import { TabsComponent } from '../tabs/Tabs';
import MethodParameterValidationTipComponent from './method-paramerter-validation/method-paramerter-validation-tip.component';

const TipsComponent = () => {
    return (
        <TabsComponent activeTab={1}>
            <div tabName="Method Parameter Validation">
                <MethodParameterValidationTipComponent requiredProp />
            </div>
            <div tabName="Pretty JSON stringify">
                <div style={{ whiteSpace: 'pre' }}>{JSON.stringify({ name: 'John', Age: 23 }, null, '\t')}</div>
            </div>
            <div tabName="Unique Values From An Array">
                {console.log([...new Set([1, 2, 3, 3, 3, 'school', 'school', 'ball', false, false, true, true])])}
                [...new Set([1, 2, 3, 3,3,"school","school",'ball',false,false,true,true])];
            </div>
            <div tabName="Removing Falsy Values From Arrays">
                {console.log(['', undefined, null, NaN, 0, '', false, 'prop'].filter(Boolean))}
                undefined; null; NaN; 0; “” (empty string); false; <br />
                myArray.filter(Boolean);
            </div>
            <div tabName="Disable Right Click">
                На диве не работает но на боди да
                {/* <body oncontextmenu="return false"> */}
                {/*    <div></div>*/}
                {/* </body> */}
            </div>
        </TabsComponent>
    );
};

export default memo(TipsComponent);

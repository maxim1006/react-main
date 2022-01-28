import React, { memo } from 'react';
import { TabsComponent } from '../tabs/Tabs';
import PerformanceUseMemo from './performance-use-memo.component';
import PerformanceVirtualizeList from './performance-virtualize-list.component';
import PerformanceWebWorkerComponent from './performance-web-worker.component';

// так как использую кастомый аттрибут на html элементе не через data-* должен добавить в модель разрешеннных
// аттрибутов tabName
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        tabName?: string;
    }
}

const Performance: React.FC = () => {
    return (
        <TabsComponent activeTab={2}>
            <div tabName='UseMemo'>
                <PerformanceUseMemo />
            </div>
            <div tabName='Virtualize long lists'>
                <PerformanceVirtualizeList />
            </div>
            <div tabName='Web worker'>
                <PerformanceWebWorkerComponent />
            </div>
        </TabsComponent>
    );
};

export default memo(Performance);

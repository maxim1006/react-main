import { useState, memo, Suspense, lazy, ComponentType } from 'react';

const ExamplesLazyComponent: ComponentType = lazy(() => import('../lazy/examples-lazy.component'));

const ExampleLazyOnClickComponent = () => {
    const [view, setView] = useState(false);

    const loadComponent = () => setView(true);
    return (
        <Suspense fallback='Loading...'>
            <div onClick={loadComponent}>Click</div>
            {view && <ExamplesLazyComponent />}
        </Suspense>
    );
};

export default memo(ExampleLazyOnClickComponent);

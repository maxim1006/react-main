import './App.css';
import UseTransition from './components/usetransition/usetransition.component.tsx';
import UseActionState from './components/useactionstate/useactionstate.component.tsx';
import UseExample from './components/use/use-example.component.tsx';
import { Suspense } from 'react';
import HeadTags from './components/head-tags/head-tags.component.tsx';
import { UseWithSuspense } from './components/use/use-with-suspense.component.tsx';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';

function App() {
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<>Suspense fallback...</>}>
                    <UseWithSuspense />
                </Suspense>
            </ErrorBoundary>
            {/* тут Suspense так как use будет получать дату и только потом отрендерится, забавно что
            заблочит весь интерфейс если не обернуть UseExample в Suspense*/}
            <Suspense fallback={<div>Loading...</div>}>
                <UseExample />
            </Suspense>
            <UseActionState />
            <UseTransition />
            <HeadTags />
        </>
    );
}

export default App;

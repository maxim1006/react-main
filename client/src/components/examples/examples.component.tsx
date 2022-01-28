import React, { memo, Suspense } from 'react';
import ExampleComponent from './example/example.component';
import ExamplesCssModuleComponent from './css-module/examples-css-module.component';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import ExamplesRouterComponent from './router/examples-router.component';
import ExampleLazyOnClickComponent from './lazy-on-click/examples-lazy-on-click.component';
import ExamplesLocalizationComponent from './localization/examples-localization.component';

const ExamplesComponent = () => {
    return (
        <Suspense fallback='Loading...'>
            <ExampleComponent caption='Example of css module' component={<ExamplesCssModuleComponent />} />
            <ExampleComponent caption='Example of icon usage' component={<UserIcon />} />
            <ExampleComponent caption='Example of Routing' component={<ExamplesRouterComponent />} />
            <ExampleComponent caption='Example of localization' component={<ExamplesLocalizationComponent />} />
            <ExampleComponent caption='Example of lazy on click' component={<ExampleLazyOnClickComponent />} />
        </Suspense>
    );
};

export default memo(ExamplesComponent);

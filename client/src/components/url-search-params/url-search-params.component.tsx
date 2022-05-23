import React, { memo, FC, useEffect } from 'react';

type UrlSearchParamsProps = {};

const UrlSearchParams: FC<UrlSearchParamsProps> = () => {
    useEffect(() => {
        // заменить урлу без перезагрузки
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set('param', '1');
        searchParams.set('param1', '2');
        console.log(searchParams.toString());
        console.dir(searchParams);
        let path = window.location.pathname + '?' + searchParams.toString();
        window.history.replaceState(null, document.title, path);
    }, []);

    const locationHref = window.location.href;
    const locationSearch = window.location.search;

    console.log(locationHref); // http://localhost:3000/react?param=1&param1=2
    console.log(locationSearch); // ?param=1&param1=2

    const queryParamsHref = new URLSearchParams(locationHref);
    const queryParamsSearch = new URLSearchParams(window.location.search);

    console.log(queryParamsHref.toString()); // http%3A%2F%2Flocalhost%3A3000%2Freact%3Fparam=1&param1=2
    console.log(queryParamsSearch.toString()); // param=1&param1=2

    const { param, param1: param1Renamed } = Object.fromEntries(queryParamsSearch.entries());

    console.log(param, param1Renamed); // 1 2

    return <div>UrlSearchParams</div>;
};

export default memo(UrlSearchParams);

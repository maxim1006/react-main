import { useState, useEffect } from 'react';
import customAxios from '../../common/api/axios';

export default function useHooks(resource) {
    const cancelHooksRequest = customAxios.CancelToken.source();
    const [resources, setResources] = useState([]);

    // по умолчанию ведет себя как componentDidMount
    // но если поменять значение в массиве (второй аргумент в useEffect)
    // то вызовется () => {} (первый аргумент в useEffect)
    // если не передавать [] во второй аргумент, то 1ый аргумент будет вызываться бесконечно, поэтому всегда хотябы пустой []
    // если будет просто пустой массив (или массив с одним и тем же значением), то сколько бы не менял входные атрибуты и ререндерил эту компоненту запрос отправится 1 раз
    // должен возвращать cleanup function or nothing, поэтому должен логику внутри первой функции в useEffect оборачивать по примеру getHooks
    useEffect(() => {
        const getHooks = async resource => {
            try {
                const { data: resources } = await customAxios.get(`/hooks/${resource}`, {
                    cancelToken: cancelHooksRequest.token,
                });

                setResources(resources);
            } catch (e) {
                console.log("HooksList get('/hooks'... error ", e);
            }
        };

        getHooks(resource);

        return () => {
            cancelHooksRequest.cancel("HooksListClass get('/hooks'... canceled");
        };
    }, [cancelHooksRequest, resource]);

    return resources;
}

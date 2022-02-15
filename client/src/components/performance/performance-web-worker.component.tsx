/* eslint-disable */
import { FC, memo, useEffect, useMemo, useState } from 'react';
import worker from './webWorker';

const PerformanceWebWorkerComponent: FC = () => {
    let webWorker: any;

    const [result, setResult] = useState();

    const calc = () => {
        webWorker.postMessage({
            eventType: 'sum',
        });
    };

    useEffect(() => {
        let code = worker.toString();
        code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
        const bb = new Blob([code], { type: 'application/javascript' });
        webWorker = new Worker(URL.createObjectURL(bb));
        webWorker.addEventListener('message', (event: { data: any }) => {
            const { eventType, payload } = event.data;

            if (eventType === 'sumResult') {
                setResult(payload);
            }
        });

        return () => webWorker.terminate();
    }, [result]);

    return (
        <div>
            <button onClick={calc}> Calculate Sum </button>
            <h3> Result: {result}</h3>
        </div>
    );
};

export default memo(PerformanceWebWorkerComponent);

const wrapPromiseCacheMap = new Map();

/*
*  Это стандартный паттерн для обертки промиса, чтобы можно было его подвесить на suspense
*
* Соответствие статусов suspense к промису
*   1. progress / pending – промис ещё не завершился, компонент должен “подвеситься”.
	2. done / fulfilled – промис успешно завершился, данные готовы, можно возвращать.
	3. failed / rejected – промис завершился с ошибкой, нужно кинуть её, чтобы ErrorBoundary поймал.
*
* */
function wrapPromise<T>(promise: Promise<T>): () => T {
    let result: T;
    let status = 'progress';

    const task = promise
        .then(r => {
            result = r;
            status = 'done';
        })
        .catch(e => {
            result = e;
            status = 'failed';
        });

    return () => {
        if (status === 'progress') {
            // так Suspense подвешивается на промис
            throw task;
        } else if (status === 'failed') {
            // так ErrorBoundary поймает ошибку
            throw result;
        } else {
            return result as T;
        }
    };
}

function suspenseData<T>(key: string, task: () => Promise<T>): () => T {
    const _cached = wrapPromiseCacheMap.get(key);

    // suspenseData отработает 2 раза 1ый и когда выполнится промис, после его выполнения сработает if (_cached) так как wrapPromiseCacheMap.set(key, r); выполнится после резолва прамиса
    if (_cached) {
        if (typeof _cached === 'function') {
            return _cached as () => T;
        }
        return () => _cached as T;
    }

    const _suspenseTask = wrapPromise<T>(
        task().then(r => {
            wrapPromiseCacheMap.set(key, r);
            return r;
        }),
    );

    wrapPromiseCacheMap.set(key, _suspenseTask);

    return _suspenseTask;
}

export { wrapPromise, suspenseData };

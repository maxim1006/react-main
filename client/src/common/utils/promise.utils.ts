function wrapPromise<T>(promise: Promise<T>): () => T {
    let result: unknown;
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
            throw task;
        } else if (status === 'failed') {
            throw result;
        } else {
            return result as T;
        }
    };
}

export { wrapPromise };

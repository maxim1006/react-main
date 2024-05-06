export function delay(time: number, ...args: unknown[]) {
    return new Promise(res => {
        setTimeout(res, time, args);
    });
}

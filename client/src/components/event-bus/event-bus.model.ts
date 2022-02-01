export interface EventBusModel {
    subscribe(name: string, cb: (...args: unknown[]) => any): () => void;
    subscribers: { [key: string]: Set<(...args: unknown[]) => any> };
    dispatch(name: string, ...args: unknown[]): void;
    unsubscribe(name: string, cb: (...args: unknown[]) => any): void;
}

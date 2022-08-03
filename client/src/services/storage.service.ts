class StorageService {
    private listeners: {
        itemKey: string;
        callback: (item: any) => void;
    }[] = [];

    public addListener(itemKey: string, callback: (item: any) => void): void {
        this.listeners.push({
            itemKey,
            callback,
        });
    }

    public removeListener(itemKey: string, callback: (item: any) => void): void {
        this.listeners = this.listeners.filter(
            listener => listener.itemKey !== itemKey && listener.callback !== callback
        );
    }

    public read<T>(itemKey: string): T | undefined {
        try {
            return JSON.parse(window.localStorage.getItem(itemKey) || '{}');
        } catch (e) {
            console.error('Reading LocalStorage error ', e);
        }
    }

    public write<T>(itemKey: string, item: T): void {
        try {
            localStorage.setItem(itemKey, JSON.stringify(item));
        } catch (e) {
            console.error('Writing LocalStorage error ', e);
        }

        this.listeners.forEach(listener => {
            if (listener.itemKey === itemKey) listener.callback(item);
        });
    }
}

export default new StorageService();

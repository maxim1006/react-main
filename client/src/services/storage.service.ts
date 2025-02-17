import { v4 as uuidv4 } from 'uuid';

class LocalStorageService {
    private listeners: {
        id: string;
        itemKey: string;
        callback: (item: any) => void;
    }[] = [];

    public addStorageChangesListener(itemKey: string, callback: (item: any) => void): string {
        const id = uuidv4();
        this.listeners.push({
            id,
            itemKey,
            callback,
        });

        return id;
    }

    public removeStorageChangesListener(id: string): void {
        this.listeners = this.listeners.filter(listener => listener.id !== id);
    }

    public readFromStorage<T>(itemKey: string): T | undefined {
        return readFromLocalStorage(itemKey);
    }

    public removeFromStorage(itemKey: string): void {
        removeFromLocalStorage(itemKey);
    }

    public writeToStorage<T>(itemKey: string, item: T): void {
        try {
            localStorage.setItem(itemKey, JSON.stringify(item));
        } catch (e) {
            console.error('Error while writing to the LocalStorage ', e);
        }

        this.listeners.forEach(listenerConfig => {
            if (listenerConfig.itemKey === itemKey) listenerConfig.callback(item);
        });
    }
}

const localStorageService = new LocalStorageService();

export { localStorageService };

// helpers
function readFromLocalStorage<T>(itemKey: string | number): T | undefined {
    try {
        return JSON.parse(window.localStorage.getItem(itemKey.toString()) || '{}');
    } catch (e) {
        console.error('Error while retrieving from the LocalStorage ', e);
        return;
    }
}

function removeFromLocalStorage(itemKey: string | number): void {
    try {
        return window.localStorage.removeItem(itemKey.toString());
    } catch (e) {
        console.error('Error while retrieving from the LocalStorage ', e);
        return;
    }
}

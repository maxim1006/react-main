class SessionStorageService {
    getItem(key: string): string | undefined {
        try {
            const value = sessionStorage.getItem(key);
            return value === null ? undefined : value;
        } catch (e) {
            console.error('Error while retrieving from the SessionStorage ', e);
        }
    }

    setItem(key: string, value: string): void {
        try {
            sessionStorage.setItem(key, value);
        } catch (e) {
            console.error('Error while writing to the SessionStorage ', e);
        }
    }

    removeItem(key: string) {
        try {
            sessionStorage.removeItem(key);
        } catch (e) {
            console.error('Error while removing from the SessionStorage ', e);
        }
    }
}

const sessionStorageService = new SessionStorageService();

export default sessionStorageService;

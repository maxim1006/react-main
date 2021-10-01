export interface SessionStorageContextModel {
    name?: string;
}
export interface LocalStorageContextModel {
    age?: number;
}

export interface StorageContextModel {
    local: LocalStorageContextModel;
    session: SessionStorageContextModel;
}

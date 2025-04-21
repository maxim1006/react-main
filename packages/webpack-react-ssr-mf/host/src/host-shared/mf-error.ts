export class MfErrorClass extends Error {
    constructor(status: number, message: string) {
        super(message);
        this.name = 'MfError';
        this.status = status;
    }

    status: number;
}

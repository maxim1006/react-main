import { ApolloError } from 'apollo-server-express';

export interface ErrorModel {
    message: string;
    field: string;
}

export interface Error {
    id?: string;
    errors?: ErrorModel[];
}

export class ServerError extends ApolloError {
    constructor(message: string, code?: string, error?: Error) {
        super(message, code, error);
    }
}

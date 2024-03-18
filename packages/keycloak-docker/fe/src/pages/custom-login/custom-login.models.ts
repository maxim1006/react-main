export interface SaveCustomerDataRequestArgs {
    customerId: string;
    token: string;
}

export interface AccessToken {
    sessionState: string;
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    expiryDateTime: number;
}

export interface UserSensitiveDataRequestModel {
    userId: string;
    accessToken: string;
}

export interface UserModel {
    id: number;
    name: string;
    email: number;
}

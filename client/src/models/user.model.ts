export interface UserModel {
    id?: string;
    name: string;
    occupation?: string;
    address?: {
        city?: string;
        street?: string;
        zip?: string;
    };
}

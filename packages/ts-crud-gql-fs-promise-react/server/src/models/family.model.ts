export interface FamilyMemberModel {
    name: string;
    age: number;
    id: string;
}

export interface FamilyModel {
    id?: string;
    members?: FamilyMemberModel[];
}

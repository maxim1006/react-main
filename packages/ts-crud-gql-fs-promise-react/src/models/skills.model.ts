import { ErrorModel } from './error.model';

export interface SkillModel {
    name: string;
    completed: boolean;
    id: string;
}

export interface SkillsModel {
    id: string;
    items?: SkillModel[];
    errors?: [ErrorModel];
}

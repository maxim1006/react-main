export enum IssuesDisplayTypeEnum {
    Issues = 'issues',
    Comments = 'comments',
}

export interface IssuesDisplayModel {
    displayType: IssuesDisplayTypeEnum;
    issueId: number | null;
}

export interface IssuesDisplayRepoModel {
    org: string;
    repo: string;
}

export type IssuesDisplayStateModel = {
    page: number;
} & IssuesDisplayModel &
    IssuesDisplayRepoModel;

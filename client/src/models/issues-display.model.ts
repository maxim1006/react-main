export interface IssuesDisplayModel {
    displayType: 'issues' | 'comments';
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

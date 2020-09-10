import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssuesDisplayModel, IssuesDisplayRepoModel, IssuesDisplayStateModel } from '../models/issues-display.model';

let initialState: IssuesDisplayStateModel = {
    org: 'rails',
    repo: 'rails',
    page: 1,
    displayType: 'issues',
    issueId: null
};

const issuesDisplaySlice = createSlice({
    name: 'issuesDisplay',
    initialState,
    reducers: {
        rtDisplayRepo(state, { payload }: PayloadAction<IssuesDisplayRepoModel>) {
            const { org, repo } = payload;
            state.org = org;
            state.repo = repo;
        },
        rtSetCurrentPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        rtSetCurrentDisplayType(state, { payload }: PayloadAction<IssuesDisplayModel>) {
            const { displayType, issueId = null } = payload;
            state.displayType = displayType;
            state.issueId = issueId;
        }
    }
});

export const { rtDisplayRepo, rtSetCurrentPage, rtSetCurrentDisplayType } = issuesDisplaySlice.actions;

export default issuesDisplaySlice.reducer;

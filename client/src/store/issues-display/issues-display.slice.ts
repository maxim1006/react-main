import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    IssuesDisplayModel,
    IssuesDisplayRepoModel,
    IssuesDisplayStateModel,
    IssuesDisplayTypeEnum,
} from '@app/models/issues-display.model';

let initialState: IssuesDisplayStateModel = {
    org: 'rails',
    repo: 'rails',
    page: 1,
    displayType: IssuesDisplayTypeEnum.Issues,
    issueId: null,
};

const issuesDisplaySlice = createSlice({
    name: 'issuesDisplay',
    initialState,
    reducers: {
        displayRepo(state, { payload }: PayloadAction<IssuesDisplayRepoModel>) {
            const { org, repo } = payload;
            state.org = org;
            state.repo = repo;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setCurrentDisplayType(state, { payload }: PayloadAction<IssuesDisplayModel>) {
            const { displayType, issueId = null } = payload;
            state.displayType = displayType;
            state.issueId = issueId;
        },
    },
});

export const { displayRepo, setCurrentPage, setCurrentDisplayType } = issuesDisplaySlice.actions;

export default issuesDisplaySlice.reducer;

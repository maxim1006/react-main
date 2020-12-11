import { skillFilter } from '../../../gql/cache';
import { GetSkills } from './__generated__/GetSkills';

export function useFilteredSkills(data: GetSkills) {
    let filteredSkills = null;

    if (Array.isArray(data?.skills?.items)) {
        const skillFilterState = skillFilter();

        filteredSkills = data?.skills?.items?.filter(skill => {
            switch (skillFilterState) {
                case 'Completed':
                    return skill?.completed;
                case 'In progress':
                    return !skill?.completed;
                default:
                    return true;
            }
        });
    }

    return { filteredSkills };
}

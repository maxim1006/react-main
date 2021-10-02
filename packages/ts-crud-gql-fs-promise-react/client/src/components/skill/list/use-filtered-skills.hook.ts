import { skillFilter } from '../../../gql/cache';
import { GetSkillsQuery } from '../../../generated/operations';

export function useFilteredSkills(data: GetSkillsQuery) {
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

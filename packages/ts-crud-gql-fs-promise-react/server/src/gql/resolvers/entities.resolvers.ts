import { FamilyModel } from '../../models/family.model';
import { SkillsModel } from '../../models/skills.model';
import { SKILLS_ID } from './skills.resolvers';
import { readFileJSON } from '../../utils/fs-utils';

export const EntitiesResolvers = {
    Query: {
        getEntities: async (_: any, { id }: { id: string }): Promise<FamilyModel | SkillsModel | null> => {
            if (id === SKILLS_ID) {
                try {
                    const items = await readFileJSON('data/skills.json');

                    return {
                        id: SKILLS_ID,
                        items,
                    };
                } catch (error) {
                    return {
                        id: SKILLS_ID,
                        errors: [{ field: 'skills', message: `Query skills error ${error.message}` }],
                    };
                }
            }

            if (id === '') {
                try {
                    const members = await readFileJSON('data/family.json');

                    return {
                        members,
                    };
                } catch (error) {
                    return {
                        id,
                        errors: [{ field: 'family', message: `Query family error ${error.message}` }],
                    };
                }
            }

            return null;
        },
    },
    Entities: {
        __resolveType: (obj?: SkillsModel & FamilyModel): string | null => {
            if (obj?.items) {
                return 'Skills';
            }

            if (obj?.members) {
                return 'Family';
            }

            return null;
        },
    },
};

// query GetEntities {
//     getEntities(id: "Skills_id") {
//     ...on Family {
//             members {
//                 name
//                 id
//             }
//             id
//             errors {
//                 field
//                 message
//             }
//         }
//     }
// }
//
// query GetEntities {
//     getEntities(id: "") {
//     ...on Family {
//             members {
//                 name
//             }
//             errors {
//                 field
//                 message
//             }
//         }
//     }
// }

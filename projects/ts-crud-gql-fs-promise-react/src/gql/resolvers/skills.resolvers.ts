import { readFileJSON, writeFileJSON } from '../../utils/fs-utils';
import { SkillModel, SkillsModel } from '../../models/skills.model';

const SKILLS_ID = `Skills_${Date.now()}`;
const path = 'data/skills.json';

export const SkillsResolvers = {
    Query: {
        skills: async (): Promise<SkillsModel> => {
            try {
                return await readFileJSON('data/skills.json');
            } catch (error) {
                return {
                    id: SKILLS_ID,
                    errors: [{ field: 'skills', message: `Query skills error ${error.message}` }],
                };
            }
        },
    },
    Mutation: {
        createSkill: async (
            _: any,
            {
                name,
                completed,
            }: {
                name: string;
                completed: boolean;
            }
        ): Promise<SkillsModel> => {
            const path = 'data/skills.json';
            if (!name) {
                return {
                    id: SKILLS_ID,
                    errors: [{ field: 'createSkill', message: `No name input provided` }],
                };
            }

            const skill = { completed, name, id: `Skill_${Date.now()}` };

            try {
                let skills = await readFileJSON(path);

                if (!Array.isArray(skills)) {
                    skills = [];
                }

                skills.push(skill);

                await writeFileJSON(path, skills);
                console.log(skills);
                return skills;
            } catch (error) {
                return {
                    id: SKILLS_ID,
                    errors: [{ field: 'createSkill', message: `Mutation createSkill error ${error.message}` }],
                };
            }
        },
        updateSkill: async (
            _: any,
            {
                input,
            }: {
                input: SkillModel;
            }
        ): Promise<SkillsModel> => {
            try {
                let skills = await readFileJSON(path);

                if (!Array.isArray(skills)) {
                    return {
                        id: SKILLS_ID,
                        errors: [
                            {
                                field: 'updateSkill',
                                message: `Mutation updateSkill error no items to update`,
                            },
                        ],
                    };
                }

                let isSkill = skills.find((i: SkillsModel) => i.id === input.id);

                if (!isSkill) {
                    return {
                        id: SKILLS_ID,
                        errors: [
                            {
                                field: 'updateSkill',
                                message: `Mutation updateSkill error no such skill`,
                            },
                        ],
                    };
                }

                skills = skills.map((i: SkillModel) => (i.id === input.id ? input : i));

                await writeFileJSON(path, skills);

                return skills;
            } catch (error) {
                return {
                    id: SKILLS_ID,
                    errors: [{ field: 'updateSkill', message: `Mutation updateSkill error ${error.message}` }],
                };
            }
        },
        deleteSkill: async (
            _: any,
            {
                id,
            }: {
                id: string;
            }
        ): Promise<SkillsModel> => {
            try {
                let skills = await readFileJSON(path);

                skills = skills.filter((skill: SkillModel) => skill.id !== id);

                await writeFileJSON(path, skills);

                return skills;
            } catch (error) {
                return {
                    id: SKILLS_ID,
                    errors: [{ field: 'deleteSkill', message: `Mutation deleteSkill error ${error.message}` }],
                };
            }
        },
    },
};

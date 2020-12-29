import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Skills } from '../entities/Skills';
import { readFileJSON, writeFileJSON } from '../../utils/fs-utils';
import { Skill } from '../entities/Skill';

export const SKILLS_ID = `Skills_id`;
const path = 'data/skills.json';

@InputType()
class SkillInput {
    @Field()
    name?: string;
    @Field()
    completed?: boolean;
    @Field()
    id: string;
}

@Resolver()
export class SkillsResolver {
    @Query(() => Skills)
    async skills(): Promise<Skills> {
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

    @Mutation(() => Skills)
    async createSkill(@Arg('name') name: string, @Arg('completed') completed: boolean) {
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

            return {
                id: SKILLS_ID,
                items: skills,
            };
        } catch (error) {
            return {
                id: SKILLS_ID,
                errors: [{ field: 'createSkill', message: `Mutation createSkill error ${error.message}` }],
            };
        }
    }

    @Mutation(() => Skills)
    async updateSkill(@Arg('input') input: SkillInput): Promise<Skills> {
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

            let isSkill = skills.find((i: Skills) => i.id === input.id);

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

            skills = skills.map((i: SkillInput) => (i.id === input.id ? input : i));

            await writeFileJSON(path, skills);

            return {
                id: SKILLS_ID,
                items: skills,
            };
        } catch (error) {
            return {
                id: SKILLS_ID,
                errors: [{ field: 'updateSkill', message: `Mutation updateSkill error ${error.message}` }],
            };
        }
    }

    @Mutation(() => Skills)
    async deleteSkill(@Arg('id') id: string): Promise<Skills> {
        try {
            let skills = await readFileJSON(path);

            skills = skills.filter((skill: Skill) => skill.id !== id);

            await writeFileJSON(path, skills);

            return {
                id: SKILLS_ID,
                items: skills,
            };
        } catch (error) {
            return {
                id: SKILLS_ID,
                errors: [{ field: 'deleteSkill', message: `Mutation deleteSkill error ${error.message}` }],
            };
        }
    }
}

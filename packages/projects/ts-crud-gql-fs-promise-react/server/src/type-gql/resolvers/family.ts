import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { Family } from '../entities/Family';
import { readFileJSON, writeFileJSON } from '../../utils/fs-utils';
import { FieldError } from '../entities/FieldError';

export const FAMILY_ID = 'FAMILY_ID';
@InputType()
class FamilyMemberInput {
    @Field()
    name: string;
    @Field()
    age: number;
    @Field()
    id: string;
}

@ObjectType()
class DeletedFamilyMember {
    @Field()
    deleted: boolean;
    @Field()
    id: string;
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}

@Resolver()
export class FamilyResolver {
    @Query(() => Family)
    async family(): Promise<Family> {
        try {
            const members = await readFileJSON('data/family.json');

            return {
                id: FAMILY_ID,
                members,
            };
        } catch (error) {
            return {
                id: FAMILY_ID,
                errors: [{ field: 'family', message: `Query family error ${error.message}` }],
            };
        }
    }

    @Mutation(() => Family)
    async createFamilyMember(@Arg('name') name: string, @Arg('age') age: number): Promise<Family> {
        const path = 'data/family.json';

        if (!name) {
            return {
                id: FAMILY_ID,
                errors: [{ field: 'addFamilyMember', message: `No name input provided` }],
            };
        }

        if (!age) {
            return {
                id: FAMILY_ID,
                errors: [{ field: 'addFamilyMember', message: `No age input provided` }],
            };
        }

        const member = { age, name, id: `Member_${Date.now()}` };

        try {
            let members = await readFileJSON(path);

            if (!Array.isArray(members)) {
                members = [];
            }

            members.push(member);

            await writeFileJSON(path, members);

            return {
                id: FAMILY_ID,
                members,
            };
        } catch (error) {
            return {
                id: FAMILY_ID,
                errors: [{ field: 'addFamilyMember', message: `Mutation addFamilyMember error ${error.message}` }],
            };
        }
    }

    @Mutation(() => Family)
    async updateFamilyMember(@Arg('input') input: FamilyMemberInput): Promise<Family> {
        const path = 'data/family.json';

        try {
            let members = await readFileJSON(path);

            if (!Array.isArray(members)) {
                return {
                    id: FAMILY_ID,
                    errors: [
                        {
                            field: 'updateFamilyMember',
                            message: `Mutation updateFamilyMember error no members to update`,
                        },
                    ],
                };
            }

            let isMember = members.find((m: FamilyMemberInput) => m.id === input.id);

            if (!isMember) {
                return {
                    id: FAMILY_ID,
                    errors: [
                        {
                            field: 'updateFamilyMember',
                            message: `Mutation updateFamilyMember error no such member`,
                        },
                    ],
                };
            }

            members = members.map((m: FamilyMemberInput) => (m.id === input.id ? input : m));

            await writeFileJSON(path, members);

            return {
                id: FAMILY_ID,
                members,
            };
        } catch (error) {
            return {
                id: FAMILY_ID,
                errors: [
                    { field: 'updateFamilyMember', message: `Mutation updateFamilyMember error ${error.message}` },
                ],
            };
        }
    }

    @Mutation(() => DeletedFamilyMember)
    async deleteFamilyMember(@Arg('id') id: string): Promise<DeletedFamilyMember> {
        const path = 'data/family.json';

        try {
            let members = await readFileJSON(path);

            members = members.filter((member: FamilyMemberInput) => member.id !== id);

            await writeFileJSON(path, members);

            return {
                id,
                deleted: true,
            };
        } catch (error) {
            return {
                id,
                deleted: false,
                errors: [
                    { field: 'deleteFamilyMember', message: `Mutation deleteFamilyMember error ${error.message}` },
                ],
            };
        }
    }
}

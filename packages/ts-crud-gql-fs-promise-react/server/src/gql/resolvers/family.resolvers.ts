import { readFileJSON, writeFileJSON } from '../../utils/fs-utils';
import { ServerError } from '../../models/error.model';
import { FamilyMemberModel } from '../../models/family.model';
import { ERROR_CODE } from '../../constants';

// тут специально без id чтобы посмотреть как кеш в этом случае работает

export const FamilyResolvers = {
    Query: {
        // hello: (root, args, ctx, info) => {
        //     // console.log(root, args, ctx, info);
        //     return 'Hello world!';
        // },
        family: async (): Promise<{
            members?: FamilyMemberModel[];
        }> => {
            const members = await readFileJSON('data/family.json').catch(e => {
                throw new ServerError('Internal Server Error', ERROR_CODE, {
                    errors: [
                        {
                            message: `Query family error ${e.message}`,
                            field: 'family',
                        },
                    ],
                });
            });

            return {
                members,
            };
        },
    },
    Mutation: {
        createFamilyMember: async (
            _: any,
            {
                name,
                age,
            }: {
                name: string;
                age: number;
            }
        ): Promise<{
            members?: FamilyMemberModel[];
        }> => {
            const path = 'data/family.json';

            if (!name) {
                throw new ServerError('No name input provided', ERROR_CODE, {
                    errors: [
                        {
                            message: `No name input provided`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
            }

            if (!age) {
                throw new ServerError('No age input provided', ERROR_CODE, {
                    errors: [
                        {
                            message: `No age input provided`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
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
                    members,
                };
            } catch (error) {
                throw new ServerError(`Mutation addFamilyMember error ${error.message}`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation addFamilyMember error ${error.message}`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
            }
        },
        createFamilyMemberUnique: async (
            _: any,
            {
                name,
                age,
            }: {
                name: string;
                age: number;
            }
        ): Promise<FamilyMemberModel> => {
            const path = 'data/family.json';

            if (!name) {
                throw new ServerError('No name input provided', ERROR_CODE, {
                    errors: [
                        {
                            message: `No name input provided`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
            }

            if (!age) {
                throw new ServerError('No age input provided', ERROR_CODE, {
                    errors: [
                        {
                            message: `No age input provided`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
            }

            const member = { age, name, id: `Member_${Date.now()}` };

            console.log({ member });

            try {
                let members = await readFileJSON(path);

                if (!Array.isArray(members)) {
                    members = [];
                }

                members.push(member);

                await writeFileJSON(path, members);

                return member;
            } catch (error) {
                throw new ServerError(`Mutation addFamilyMember error ${error.message}`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation addFamilyMember error ${error.message}`,
                            field: 'addFamilyMember',
                        },
                    ],
                });
            }
        },
        updateFamilyMember: async (
            _: any,
            {
                input,
            }: {
                input: FamilyMemberModel;
            }
        ): Promise<{
            members?: FamilyMemberModel[];
        }> => {
            const path = 'data/family.json';

            let members = await readFileJSON(path).catch(error => {
                throw new ServerError(`Mutation updateFamilyMember error ${error.message}`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation updateFamilyMember error ${error.message}`,
                            field: 'updateFamilyMember',
                        },
                    ],
                });
            });

            if (!Array.isArray(members)) {
                throw new ServerError(`Mutation updateFamilyMember error no members to update`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation updateFamilyMember error no members to update`,
                            field: 'updateFamilyMember',
                        },
                    ],
                });
            }

            let isMember = members.find((m: FamilyMemberModel) => m.id === input.id);

            if (!isMember) {
                throw new ServerError(`Mutation updateFamilyMember error no such member`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation updateFamilyMember error no such member`,
                            field: 'updateFamilyMember',
                        },
                    ],
                });
            }

            members = members.map((m: FamilyMemberModel) => (m.id === input.id ? input : m));

            await writeFileJSON(path, members);

            return {
                members,
            };
        },
        deleteFamilyMember: async (
            _: any,
            {
                id,
            }: {
                id: string;
            }
        ): Promise<{
            deleted?: boolean;
            id?: string;
        }> => {
            const path = 'data/family.json';

            try {
                let members = await readFileJSON(path);

                members = members.filter((member: FamilyMemberModel) => member.id !== id);

                await writeFileJSON(path, members);

                return {
                    id,
                    deleted: true,
                };
            } catch (error) {
                throw new ServerError(`Mutation deleteFamilyMember error ${error.message}`, ERROR_CODE, {
                    errors: [
                        {
                            message: `Mutation deleteFamilyMember error ${error.message}`,
                            field: 'deleteFamilyMember',
                        },
                    ],
                });
            }
        },
    },
};

// mutation {
//     deleteFamilyMember(id:"Member_1604854584145"){
//         deleted
//         errors {
//             message
//             field
//         }
//     }
// }

// mutation {
//     updateFamilyMember(input:{name: "Max",
//         age: 33,
//         id: "Member_1604854053793"}) {
//         members{
//             id
//             name
//         }
//         errors{
//             field
//             message
//         }
//     }
// }

// mutation createFamilyMember($name:String!, $age:Int!) {
//     createFamilyMember(name:$name, age:$age) {
//         members{
//             id
//             name
//         }
//         errors{
//             field
//             message
//         }
//     }
// }

// variables
// {
//     "age": 33,
//     "name": "Max3"
// }

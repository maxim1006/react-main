import { Arg, Query, Resolver } from 'type-graphql';
import { EntitiesUnion } from '../entities/Entities';
import { readFileJSON } from '../../utils/fs-utils';
import { FieldError } from '../entities/FieldError';
import { SKILLS_ID } from '../../gql/resolvers/skills.resolvers';
import { FAMILY_ID } from './family';

@Resolver()
export class EntitiesResolver {
    @Query(() => EntitiesUnion)
    async getEntities(@Arg('id') id: string): Promise<typeof EntitiesUnion | { errors: FieldError[] } | undefined> {
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
                    id: FAMILY_ID,
                    members,
                };
            } catch (error) {
                return {
                    errors: [{ field: 'family', message: `Query family error ${error.message}` }],
                };
            }
        }

        return undefined;
    }
}

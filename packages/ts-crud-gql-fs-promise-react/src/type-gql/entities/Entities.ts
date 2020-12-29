import { createUnionType } from 'type-graphql';
import { Skills } from './Skills';
import { Family } from './Family';

export const EntitiesUnion = createUnionType({
    name: 'GetEntities',
    types: () => [Skills, Family] as const,
    // our implementation of detecting returned object type
    resolveType: value => {
        if ('items' in value) {
            return Skills;
        }

        if ('members' in value) {
            return Family;
        }

        return undefined;
    },
});

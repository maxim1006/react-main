import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class FamilyMember {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    age?: number;
}

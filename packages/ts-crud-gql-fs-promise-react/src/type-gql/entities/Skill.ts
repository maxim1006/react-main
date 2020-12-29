import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Skill {
    @Field()
    id!: string;

    @Field()
    name: string;

    @Field()
    completed: boolean;
}

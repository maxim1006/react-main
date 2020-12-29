import { Field, ObjectType } from 'type-graphql';
import { FieldError } from './FieldError';
import { Skill } from './Skill';

@ObjectType()
export class Skills {
    @Field()
    id: string;

    @Field(() => [Skill], { nullable: true })
    items?: Skill[];

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}

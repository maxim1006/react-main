import { Field, ObjectType } from 'type-graphql';
import { FamilyMember } from './FamilyMember';
import { FieldError } from './FieldError';

@ObjectType()
export class Family {
    @Field()
    id: string;

    @Field(() => [FamilyMember], { nullable: true })
    members?: FamilyMember[];

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}

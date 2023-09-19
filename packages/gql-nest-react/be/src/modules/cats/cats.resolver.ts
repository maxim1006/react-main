import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat, CreateCatInput, UpdateCatInput } from '../../graphql';

@Resolver()
export class CatsResolver {
    constructor(private catsService: CatsService) {}
    @Query('cats')
    getCats() {
        return this.catsService.getAll();
    }

    @Query('cat')
    getCatById(@Args('id') id: string) {
        return this.catsService.findById(id);
    }

    @Mutation('createCat')
    create(@Args('createCatInput') args: CreateCatInput): Cat {
        return this.catsService.create(args);
    }

    @Mutation('updateCat')
    update(@Args('updateCatInput') args: UpdateCatInput): Cat {
        return this.catsService.update(args);
    }

    @Mutation('deleteCat')
    delete(@Args('id') id: string): Cat {
        return this.catsService.delete(id);
    }
}

// query GetCatById($id: String!) {
//     cat(id: $id) {
//         id
//         name
//         age
//     }
// }
// mutation CreateCat($createCatInput: CreateCatInput!) {
//     createCat(createCatInput: $createCatInput) {
//         id
//         name
//         age
//     }
// }
// mutation UpdateCat($updateCatInput: UpdateCatInput!) {
//     updateCat(updateCatInput: $updateCatInput) {
//         id
//         name
//         age
//     }
// }

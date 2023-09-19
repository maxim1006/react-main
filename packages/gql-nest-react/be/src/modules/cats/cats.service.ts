import { Injectable } from '@nestjs/common';
import { Cat, CreateCatInput, UpdateCatInput } from '../../graphql';
import { v4 } from 'uuid';

@Injectable()
export class CatsService {
    private cats: Cat[] = [{ id: '123', name: 'Bobik', age: 5 }];

    getAll(): Cat[] {
        return this.cats;
    }

    delete(id: string): Cat {
        const deletedCat = this.cats.find((i) => i.id === id);
        this.cats = this.cats.filter((i) => i.id !== id);

        return deletedCat;
    }

    findById(id: string) {
        return this.cats.find((i) => i.id === id);
    }

    create(createCatInput: CreateCatInput) {
        const cat = {
            ...createCatInput,
            id: v4(),
        };

        this.cats.push(cat);

        return cat;
    }

    update(updateCatInput: UpdateCatInput) {
        const currentCat = this.cats.find((i) => updateCatInput.id === i.id);
        const updatedCat = {
            ...currentCat,
            ...updateCatInput,
        };

        this.cats.map((i) => {
            if (i.id === updatedCat.id) return updatedCat;
        });

        return updatedCat;
    }
}

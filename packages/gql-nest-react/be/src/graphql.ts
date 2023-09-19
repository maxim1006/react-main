
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateCatInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export interface UpdateCatInput {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export interface IQuery {
    cats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;
    cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface IMutation {
    createCat(createCatInput: CreateCatInput): Nullable<Cat> | Promise<Nullable<Cat>>;
    updateCat(updateCatInput: UpdateCatInput): Nullable<Cat> | Promise<Nullable<Cat>>;
    deleteCat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface Cat {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export interface DeleteCatInput {
    id: string;
}

type Nullable<T> = T | null;

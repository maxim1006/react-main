import { EntityState } from '@reduxjs/toolkit';

export enum ProductTypeEnum {
    Product1 = 'product',
    Product2 = 'product1',
    Default = 'default',
}

export interface ProductProp {
    id: string;
    name: string;
    value: string;
}

// product state model
export interface AbstractProductStateModel {
    id: string;
    type: ProductTypeEnum;
    name: string;
}

export interface Product1StateModel extends AbstractProductStateModel {
    type: ProductTypeEnum.Product1;
    product1StateProp: EntityState<ProductProp>;
}

export interface Product2StateModel extends AbstractProductStateModel {
    type: ProductTypeEnum.Product2;
    product2StateProp: EntityState<ProductProp>;
}

// product configuration model
export interface AbstractProductConfigurationModel {
    type: ProductTypeEnum;
    id: string;
    version: number;
}

export interface Product1ConfigurationModel extends AbstractProductConfigurationModel {
    type: ProductTypeEnum.Product1;
    name: string;
    version: number;
}

export interface Product2ConfigurationModel extends AbstractProductConfigurationModel {
    type: ProductTypeEnum.Product2;
    name: string;
    version: number;
}

export type ProductConfigurationModel = Product1ConfigurationModel | Product2ConfigurationModel;
///////////////////////////////////////////////

export type ProductConfigurationsModel = Record<string, ProductConfigurationModel>;

export enum Product1ResettableKeys {
    Product1Key = 'Product1Key',
}

export enum Product2ResettableKeys {
    Product2Key = 'Product2Key',
}

export type ProductResettableKeys = Product1ResettableKeys[] | Product2ResettableKeys[];

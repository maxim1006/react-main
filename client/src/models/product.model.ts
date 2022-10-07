import { EntityState } from '@reduxjs/toolkit';

export enum ProductTypeEnum {
    Product1 = 'product1',
    Product2 = 'product2',
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
    // спецом так назвал так как это проперти через доп редюсер делается причем заполняется в родительском редюсере
    product1InnerProp: EntityState<ProductProp>;
    prop: string;
    uniqueProduct1Prop: string;
    productFeature: ProductFeatureStateModel;
}

export interface Product2StateModel extends AbstractProductStateModel {
    type: ProductTypeEnum.Product2;
    uniqueProduct2Prop: string;
    product2InnerProp: EntityState<ProductProp>;
    prop: string;
}

export type ProductStateModel = Product1StateModel | Product2StateModel;

// product configuration model - это модели для модификации стейта (то что прокидываю в экшенах)
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

// это модели для шаренных между стейтами доп редюсерах (находятся в extraReducers) у продуктов
export interface ProductFeatureStateModel {
    id: string;
    name: string;
}

export type ProductConfigurationsModel = Record<string, ProductConfigurationModel>;

export enum Product1ResettableKeys {
    Product1Key = 'Product1Key',
}

export enum Product2ResettableKeys {
    Product2Key = 'Product2Key',
}

export type ProductResettableKeys = Product1ResettableKeys[] | Product2ResettableKeys[];

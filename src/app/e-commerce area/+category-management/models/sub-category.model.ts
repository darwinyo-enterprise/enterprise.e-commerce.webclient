import { IBaseCategoryModel } from './base-category.models';

export interface ISubCategoryModel extends IBaseCategoryModel {
    id: string;
    name: string;
    image: string;
}
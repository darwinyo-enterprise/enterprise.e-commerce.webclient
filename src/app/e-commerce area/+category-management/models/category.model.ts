import { IBaseCategoryModel } from './base-category.models';
import { ISubCategoryModel } from './sub-category.model';

export interface ICategoryModel extends IBaseCategoryModel {
    id: string;
    name: string;
    subCategories: ISubCategoryModel[];
}

import { IProductSpecModel } from './product-spec.model';

export interface IProductVariationSpecModel extends IProductSpecModel {
    overriden: boolean;
}

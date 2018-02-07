import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListPage } from './pages/products-list/products-list.page';
import { AddProductPage } from './pages/add-product/add-product.page';
import { EditProductPage } from './pages/edit-product/edit-product.page';
import { AddProductVariationComponent } from './pages/add-product-variation/add-product-variation.component';
import { EditProductVariationComponent } from './pages/edit-product-variation/edit-product-variation.component';
import { ListProductVariationComponent } from './containers/list-product-variation/list-product-variation.component';
import { ProductSpecificationComponent } from './components/product-specification/product-specification.component';
import { ListProductSpecificationComponent } from './containers/list-product-specification/list-product-specification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsListPage,
    AddProductPage,
    EditProductPage,
    AddProductVariationComponent,
    EditProductVariationComponent,
    ListProductVariationComponent,
    ProductSpecificationComponent,
    ListProductSpecificationComponent,
  ]
})
export class ProductManagementModule { }

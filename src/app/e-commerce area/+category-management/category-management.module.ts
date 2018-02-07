import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesListPage } from './pages/categories-list/categories-list.page';
import { AddCategoryPage } from './pages/add-category/add-category.page';
import { EditCategoryPage } from './pages/edit-category/edit-category.page';
import { AddSubCategoryComponent } from './pages/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './pages/edit-sub-category/edit-sub-category.component';
import { ListSubCategoryComponent } from './containers/list-sub-category/list-sub-category.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CategoriesListPage,
    AddCategoryPage,
    EditCategoryPage,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
    ListSubCategoryComponent,
  ]
})
export class CategoryManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesListPage } from './pages/inventories-list/inventories-list.page';
import { AddInventoryPage } from './pages/add-inventory/add-inventory.page';
import { EditInventoryPage } from './pages/edit-inventory/edit-inventory.page';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InventoriesListPage,
    AddInventoryPage,
    EditInventoryPage
  ]
})
export class InventoryManagementModule { }

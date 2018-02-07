import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ManufacturerManagementRouteModule } from './routes/manufacturer-management-route.module';
import { ListManufacturerComponent } from './components/list-manufacturer/list-manufacturer.component';
import { ManufacturerFormComponent } from './components/manufacturer-form/manufacturer-form.component';
import { ManageManufacturerPage } from './pages/manage-manufacturer/manage-manufacturer.page';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ManufacturerManagementRouteModule
  ],
  declarations: [
    ListManufacturerComponent,
    ManufacturerFormComponent,
    ManageManufacturerPage,
  ],
  exports: [
    ListManufacturerComponent,
    ManufacturerFormComponent,
    ManageManufacturerPage,
  ]
})
export class ManufacturerManagementModule { }

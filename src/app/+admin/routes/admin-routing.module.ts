import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { adminRoutes } from './../consts/admin-route.const';
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

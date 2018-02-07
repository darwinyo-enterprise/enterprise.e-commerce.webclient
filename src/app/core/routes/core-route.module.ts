import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import * as coreRoute from '../consts/core-route.const';

@NgModule({
  imports: [
    RouterModule.forChild(
      coreRoute.coreRoutes
    )
  ],
  exports: [RouterModule]
})
export class CoreRouteModule {

}

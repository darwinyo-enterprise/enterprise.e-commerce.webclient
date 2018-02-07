import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { manufacturerManagementRoutes } from '../consts/manufacturer-management-route.const';

@NgModule({
    imports: [
        RouterModule.forChild(
            manufacturerManagementRoutes
        )
    ],
    exports: [RouterModule]
})
export class ManufacturerManagementRouteModule {

}

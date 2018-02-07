import { RouterModule, Routes } from '@angular/router';
import { ManageManufacturerPage } from '../pages/manage-manufacturer/manage-manufacturer.page';

/** Default Route Defined In Core Module */
export const manufacturerManagementRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'manage', pathMatch: 'full' },
            { path: 'manage', component: ManageManufacturerPage }
        ]
    }
];

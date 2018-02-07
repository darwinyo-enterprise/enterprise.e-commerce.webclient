import { Routes } from '@angular/router';

import { AdminLayout } from './../layout/admin/admin.layout';
import { HomePage } from '../pages/home/home.page';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { AdminGuardService } from '../../auth/services/admin-guard/admin-guard.service';

export const adminRoutes: Routes = [
    {
        path: '', component: AdminLayout, canActivateChild: [AdminGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomePage },
            { path: 'dashboard', component: DashboardPage },
            // tslint:disable-next-line:max-line-length
            { path: 'manage-manufacturer', loadChildren: './../../e-commerce area/+manufacturer-management/manufacturer-management.module#ManufacturerManagementModule' }
        ]
    }
];

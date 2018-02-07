import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundPage } from './../pages/error-not-found/error-not-found.page';
import { CoreLayout } from '../core/layout/core/core.layout';
import { AdminGuardService } from '../auth/services/admin-guard/admin-guard.service';

/** Default Route Defined In Core Module */
export const appRoutes: Routes = [
    { path: 'admin', loadChildren: './../+admin/admin.module#AdminModule', canActivate: [AdminGuardService], pathMatch: 'prefix' },
    { path: '**', component: ErrorNotFoundPage }
];

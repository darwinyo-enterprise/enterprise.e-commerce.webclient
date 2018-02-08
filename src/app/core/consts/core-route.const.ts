import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.page';
import { CoreLayout } from '../layout/core/core.layout';
import { AboutUsPage } from '../pages/about-us/about-us.page';
import { ManageManufacturerPage } from '../../e-commerce area/+manufacturer-management/pages/manage-manufacturer/manage-manufacturer.page';

export const coreRoutes: Routes = [
    {
        path: '', component: CoreLayout, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ManageManufacturerPage },
            { path: 'about-us', component: AboutUsPage },
        ]
    },
];

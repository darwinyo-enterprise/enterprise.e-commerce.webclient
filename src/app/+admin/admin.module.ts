import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './routes/admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { AdminLayout } from './layout/admin/admin.layout';

import { AdminMenuContainer } from './containers/admin-menu/admin-menu.container';
import { InfoContainer } from './containers/info/info.container';
import { AdminNavbarButtonsContainer } from './containers/admin-navbar-buttons/admin-navbar-buttons.container';
import { SharedModule } from '../shared/shared.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    HomePage,
    AdminLayout,
    AdminMenuContainer,
    InfoContainer,
    AdminNavbarButtonsContainer,
    DashboardPage,
  ],
  exports: [
    AdminLayout,
    HomePage,
    AdminMenuContainer,
    InfoContainer,
    AdminNavbarButtonsContainer]
})
export class AdminModule { }

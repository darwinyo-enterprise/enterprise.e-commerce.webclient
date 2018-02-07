import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { sharedStateReducer } from './reducers/shared-state.reducer';
import { NavbarButtonsEffects } from './effects/navbar-buttons.effects';

import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MessageMenuComponent } from './components/message-menu/message-menu.component';
import { NavbarButtonsContainer } from './containers/navbar-buttons/navbar-buttons.container';

import { CarouselComponent } from './components/carousel/carousel.component';

import { SideMenuContainer } from './containers/side-menu/side-menu.container';
import { AccountMenuContainer } from './containers/account-menu/account-menu.container';
import { ThirdPartyModule } from '../third-party/third-party.module';
import { MenuService } from './services/menu.service';
import { BaseFormBuilderComponent } from './components/base-form-builder/base-form-builder.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@NgModule({
  imports: [
    CommonModule,

    ThirdPartyModule,

    //#region Ngrx Suites
    StoreModule.forFeature('shared', sharedStateReducer),
    EffectsModule.forFeature([NavbarButtonsEffects]),
    //#endregion
  ],
  declarations: [
    UserMenuComponent,
    NotificationComponent,
    MessageMenuComponent,
    CarouselComponent,

    NavbarButtonsContainer,
    SideMenuContainer,
    AccountMenuContainer,
    BaseFormBuilderComponent,
    ActionButtonsComponent,
  ],
  providers: [
    MenuService
  ],
  exports: [
    ThirdPartyModule,

    UserMenuComponent,
    NotificationComponent,
    MessageMenuComponent,
    CarouselComponent,

    NavbarButtonsContainer,
    SideMenuContainer,
    AccountMenuContainer,

    BaseFormBuilderComponent
  ]
})
export class SharedModule { }

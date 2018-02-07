import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthCallbackPage } from './pages/auth-callback/auth-callback.page';
import { NotAuthorizedPage } from './pages/not-authorized/not-authorized.page';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/auth.effects';

//#region Reducers
import { authStateReducer } from './reducers/auth-state.reducer';
//#endregion

//#region Routes
import { AuthRouteModule } from './routes/auth-route.module';
//#endregion

import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { PopUpPage } from './pages/pop-up/pop-up.page';
import { SilentPage } from './pages/silent/silent.page';
import { AdminGuardService } from './services/admin-guard/admin-guard.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,

    HttpClientModule,

    AuthRouteModule,

    //#region Ngrx Suites
    StoreModule.forFeature('auth', authStateReducer),
    EffectsModule.forFeature([AuthEffects])
    //#endregion
  ],
  providers: [AuthGuardService, AuthService, AdminGuardService],
  declarations: [AuthCallbackPage, NotAuthorizedPage, PopUpPage, SilentPage],
  exports: [AuthCallbackPage, NotAuthorizedPage, PopUpPage, SilentPage]
})
export class AuthModule { }

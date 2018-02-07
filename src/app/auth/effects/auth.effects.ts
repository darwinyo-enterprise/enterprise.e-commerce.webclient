//#region imports
import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';


import * as fromCore from './../../core/reducers/core-state.reducer';

import { AuthEffectMessage, Backend_Error_NoResponse } from '../../shared/consts/validation-message.const';
import { URLsClient } from '../../shared/consts/url.const';

import { AlertModel } from '../../core/models/dialogs/alert.model';
import { AuthService } from '../services/auth/auth.service';
import { window } from 'rxjs/operator/window';
import { of } from 'rxjs/observable/of';

import { AuthActionTypes, LoginFailure } from '../actions/auth.actions';
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';
import { Alert, Errors } from '../../core/actions/pop-up.actions';
import { NavLogged } from '../../shared/actions/navbar-buttons.actions';
//#endregion

@Injectable()
export class AuthEffects {
    //#region logins effects
    /** Triggered when Attempt to Login.
     *  This Will trigger:
     *  - Call Auth Service For Login To RP.
     */
    @Effect({ dispatch: false })
    login$: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_IN),
        tap(() => {
            // Call Oidc Library...
            this.authService.signInRedirect();
        })
    );

    /** Triggered when Login Success.
     *  This Will trigger:
     *  - Alert Pop up Notificate User Successfully Logged.
     *  - Navbar Will be set to Logged state.
     *  - User Will redirected to Homepage.
     */
    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_IN_SUCCESS),
        tap(() => {
            this.coreStore.dispatch(
                new Alert(
                    new AlertModel(AuthEffectMessage.LoginSuccess, 'Notif')
                )
            );
            // Toggle navbar logged
            this.coreStore.dispatch(new NavLogged());
            this.router.navigate([URLsClient.urlHome]);
        })
    );

    /** Triggered when Login Failure
     *  This Will Trigger :
     *  - Alert Pop up.
     */
    @Effect({ dispatch: false })
    loginFailure$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_IN_FAILURE),
        tap((err) => this.coreStore.dispatch(
            new Errors(
                new AlertModel(
                    (<LoginFailure>err).payload.message || Backend_Error_NoResponse, 'Error Occured!')
            )
        ))
    );

    //#endregion

    //#region Log Out
    /** Triggered when Attempt to Logout Whole System.
     *  This Will trigger:
     *  - Call Auth Service For Log out whole Apps Include RP.
     */
    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_OUT),
        tap(() => {
            // Call Oidc Library...
            this.authService.startLogoutRedirect();
        })
    );

    /** Triggered when Logout success.
     *  This Will Trigger :
     *  - Alert Pop Up.
     */
    @Effect({ dispatch: false })
    logoutSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_OUT_SUCCESS),
        tap(() => {
            this.coreStore.dispatch(
                new Alert(new AlertModel(AuthEffectMessage.LogOutSuccess, 'Notif')
                ));
        })
    );

    /** Triggered when Logout Failure.
     *  This Will Trigger :
     *  - Alert Popup
     */
    @Effect({ dispatch: false })
    logoutFailure$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOG_OUT_FAILURE),
        tap((err) => {
            this.coreStore.dispatch(
                new Errors(
                    new AlertModel(
                        (<LoginFailure>err).payload.message || Backend_Error_NoResponse, 'Error Occured!')
                ));
        })
    );

    //#endregion

    /** Triggered when Register Attempt.
     *  This Will Trigger :
     *  - Auth Service Register Redirect, Redirect User to RP.
     */
    @Effect({ dispatch: false })
    registrationRedirect$ = this.actions$.pipe(
        ofType(AuthActionTypes.REGISTRATION_REDIRECT),
        tap(() =>
            this.authService.registrationRedirect())
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private coreStore: Store<fromCore.CoreState>,
        private authService: AuthService
    ) {

    }
}

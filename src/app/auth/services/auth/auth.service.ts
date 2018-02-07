import { Injectable } from '@angular/core';
import * as Oidc from 'oidc-client';
import { config, clientID } from '../../../shared/consts/config.const';
import { User } from 'oidc-client';
import { Store } from '@ngrx/store';

import * as fromAuth from './../../reducers/auth-state.reducer';

import { LogOutSuccess, LogOutFailure, RegistrationRedirect, LoginSuccess, LoginFailure } from '../../actions/auth.actions';

import { IAuthSuccessModel } from '../../models/auth-success.model';
import { URL_AUTHORIZATION_SERVER } from '../../../shared/consts/server-url.const';
import { AlertModel } from '../../../core/models/dialogs/alert.model';
import { Backend_Error_NoResponse } from '../../../shared/consts/validation-message.const';
import { window } from 'rxjs/operator/window';
import { IAuthService } from '../../contracts/IAuth.service';
import { Errors } from '../../../core/actions/pop-up.actions';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/** NOTE : ADDING NEW FUNCTION, NEED TO ADD TO AUTH SERVICE STUB TOO, FOR TEST PURPOSE.*/

/** Used As Authentication related things,
 *  such as log-in, Log-out, get authorization header used in http client,
 *  Silent Authentication, etc... */
@Injectable()
export class AuthService implements IAuthService {
  mgr: Oidc.UserManager;
  user: User = null;

  /** Contains Current user Roles */
  roles: string[];

  /** Used In Testing Only.
   *  Effecting Test Cases.
   */
  isError: boolean;

  /** Check User Exists => If Exists Dispatch LoginSuccess Action
   *  Register User Manager Events.
   */
  constructor(protected authStore: Store<fromAuth.AuthState>, private router: Router) {
    this.mgr = new Oidc.UserManager(config);
    // this will instantiate State Store if Session still valid.
    this.mgr.getUser().then((user) => {
      if (user != null) {
        this.user = user;

        this.authStore.dispatch(new LoginSuccess(
          <IAuthSuccessModel>{
            sub: this.user.profile.sub,
            userLogin: this.user.profile.name,
            userEmail: this.user.profile.email,
            userRole: this.user.profile.role,
            isLogged: true
          }));
      }

    });
    this.setAuthenticationEvents();
  }

  //#region Extensions
  /** Verifies user, return true if user not null, and not session not expired */
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  /** Used For Getting is Current User has Admin Role */
  isAdmin(): Observable<boolean> {
    return this.authStore.select(fromAuth.getIsAdmin);
  }

  redirectToNotAuthorizedPage(): void {
    this.router.navigateByUrl('/not-authorized');
  }

  /** Get Logged User claims. */
  getClaims(): any {
    return this.user.profile;
  }
  /** Oidc related Session Clear */
  clearOidcSession(): void {
    // Clear oidc Session
    sessionStorage.removeItem('oidc.user:' + URL_AUTHORIZATION_SERVER + ':' + clientID);
  }
  /** this used for api header, where api need authorization header */
  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }
  /** Used for redirect user to RP for registration. */
  registrationRedirect() {
    // Probably we wont touch the registration url on RP...
    // So let be it.
    document.location.href = URL_AUTHORIZATION_SERVER + 'Account/Register';
  }
  //#endregion

  //#region Sign-In Functions

  /** Sign-in by redirect user directly to RP */
  signInRedirect(): Promise<void> {

    return this.mgr.signinRedirect()
      .catch((err: Error) => {
        this.authStore.dispatch(new LoginFailure(err));
      });
  }

  /** Sign-in by pop up new window */
  signInPopUp(): Promise<void> {
    return this.mgr.signinPopup().then((user) => {
      this.user = user;
    }).catch((err: Error) => {
      return this.authStore.dispatch(new LoginFailure(err));
    });
  }

  /** This will triggered by system, if config automaticSilentRenew set to true */
  signInSilent(): Promise<void> {
    return this.mgr.signinSilent().then((user) => {
      this.user = user;
    }).catch((err: Error) => {
      return this.authStore.dispatch(new LoginFailure(err));
    });
  }

  /** Call-back after authentication done, this can be return nothing if user failed to get access.
   *  if User Complete The Authentication well, this will assign user,
   *  accessing user => by call this service property.
  */
  completeRedirectAuthentication() {
    return this.mgr.signinRedirectCallback().then(user => {
      // Assign User to service...
      this.user = user;

      // Dispatch Action to store state.
      this.authStore.dispatch(new LoginSuccess(
        <IAuthSuccessModel>{
          sub: this.user.profile.sub,
          userLogin: this.user.profile.name,
          userEmail: this.user.profile.email,
          userRole: this.user.profile.role,
          isLogged: true
        }));
    })
      // Error handling
      .catch((err: Error) => {
        // Dispatch Action Login Failure...
        this.authStore.dispatch(new LoginFailure(err));
      });
  }
  /** Callback after user login silently...
   *  Set User State after this Success...
   */
  // TODO : Figure Out how to use and test silent auth
  completeSilentAuthentication(): Promise<void> {
    return this.mgr.signinSilentCallback()
      .then(() => {

        // Dispatch Action to store state.
        this.authStore.dispatch(new LoginSuccess(
          <IAuthSuccessModel>{
            sub: this.user.profile.sub,
            userLogin: this.user.profile.name,
            userEmail: this.user.profile.email,
            userRole: this.user.profile.role,
            isLogged: true
          }));
      })
      // Error handling
      .catch((err: Error) => {
        // Dispatch Action Login Failure...
        this.authStore.dispatch(new LoginFailure(err));
      });
  }
  /** Callback After Pop-Up Login...
   *  Success Will trigger Auth State To Store...
   */
  // TODO : Figure Out how to use test popup auth
  completePopUpAuthentication(): Promise<void> {
    return this.mgr.signinPopupCallback()
      .then(() => {

        // Dispatch Action to store state.
        this.authStore.dispatch(new LoginSuccess(
          <IAuthSuccessModel>{
            sub: this.user.profile.sub,
            userLogin: this.user.profile.name,
            userEmail: this.user.profile.email,
            userRole: this.user.profile.role,
            isLogged: true
          }));
      })
      // Error handling
      .catch((err: Error) => {
        // Dispatch Action Login Failure...
        this.authStore.dispatch(new LoginFailure(err));
      });
  }
  //#endregion

  //#region Sign-Out Functions
  /** Attempt To log-out by pop-up new window, user to RP,
   *  though user not logged out till RP logged out...
   *  Triggered By Auth Effects.
   */
  startLogoutPopUp() {
    return this.mgr.signoutPopup()
      .catch((err: Error) => {
        return this.authStore.dispatch(new LogOutFailure(err));
      });
  }
  /** Callback pop-up log-out can be failed.
   *  depends on RP though...
   */
  completeLogoutPopUp() {
    return this.mgr.signoutPopupCallback()
      .then(() => {
        this.authStore.dispatch(new LogOutSuccess());
        this.clearOidcSession();
      })
      .catch((err: Error) => {
        this.authStore.dispatch(new LogOutFailure(err));
      });
  }
  /** Attempt To log-out by redirect user to RP,
   *  though user not logged out till RP logged out
   *  Triggered By Auth Effects.
   */
  startLogoutRedirect() {
    return this.mgr.signoutRedirect()
      .catch((err: Error) => {
        return this.authStore.dispatch(new LogOutFailure(err));
      });
  }
  /** Callback redirect log-out can be failed.
   *  depends on RP though...
   */
  completeLogoutRedirect() {
    return this.mgr.signoutRedirectCallback()
      .then(() => {
        this.authStore.dispatch(new LogOutSuccess());
        this.clearOidcSession();
      })
      .catch((err: Error) => {
        this.authStore.dispatch(new LogOutFailure(err));
      });
  }
  //#endregion

  //#region Access Token
  /** Revoke Expiring Access Token. */
  revoke() {
    return this.mgr.revokeAccessToken();
  }
  //#endregion

  //#region Etc
  /** used in constructor only, this used for initiate events that triggered when condition fullfiled. */
  setAuthenticationEvents() {
    this.mgr.events.addUserLoaded((user) => {
      console.log('User loaded');
    });
    /** log-out locally doesn't mean RP Logged out.
     *  Only client logged out.
     */
    this.mgr.events.addUserUnloaded(() => {
      console.log('User logged out locally');
      this.completeLogoutRedirect();
    });
    /** When Access Token Expiring...
     *  This Event Triggered, Then will triggered revoke access Token.
     */
    this.mgr.events.addAccessTokenExpiring(() => {
      console.log('Access token expiring...');
      this.revoke();
    });
    /** Will Triggered when silent renew error occured. */
    this.mgr.events.addSilentRenewError((err: Error) => {
      console.log('Silent renew error: ' + err.message);

      // Pop up Alert so end-user know what actually going on.
      this.authStore.dispatch(
        new Errors(
          new AlertModel(
            err.message || Backend_Error_NoResponse, 'Error Occured!')
        ));
    });
    /** triggered when RP signed out */
    this.mgr.events.addUserSignedOut(() => {
      console.log('User signed out of OP');

      this.completeLogoutRedirect();
    });
  }
  //#endregion

}

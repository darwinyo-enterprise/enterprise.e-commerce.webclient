import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { AuthServiceStub } from '../../testing/stubs/auth-service.stub.spec';
import { User } from 'oidc-client';
import { userMock } from '../../testing/mock-data/user.mock';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import { Router } from '@angular/router';
import { RouterStub } from '../../../shared/stubs/router.stub';

describe('[AUTH] [SERVICE] AUTH-GUARD-SERVICE', () => {
  let authService: AuthService;
  let authGuardService: AuthGuardService;

  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.routerReducers,
          auth: combineReducers(fromAuth.authStateReducer),
          core: combineReducers(fromCore.coreStateReducer)
        })],
      providers: [AuthGuardService,
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub }]
    });
  });

  /** Initialize Dependencies, Mocks, Spy */
  beforeEach(() => {
    // Dependencies
    authService = TestBed.get(AuthService);
    authGuardService = TestBed.get(AuthGuardService);

    // Mocks
    user = userMock;

    // Spies
    spyOn(authService, 'signInRedirect');
    spyOn(authService, 'isLoggedIn').and.callThrough();
    spyOn(authGuardService, 'canActivate').and.callThrough();
  });

  /** Clean Up */
  afterEach(() => {
    authService = null;
    authGuardService = null;
    user = null;
  });

  /** Test Cases :
   *  - If user Exists return true.
   *  - If User Not Exists, Will trigger Signin Redirect and Return False.
   */
  it('should return true if user Exists', (done) => {
    authService.user = user;
    const res = authGuardService.canActivate(null, null);

    expect(res).toBeTruthy();
    done();
  });
  it('should return false and call SignInRedirect Service if user not Exists', (done) => {
    authService.user = null;

    const res = authGuardService.canActivate(null, null);

    /** Expectation */
    expect(res).toBeFalsy();
    expect(authService.signInRedirect).toHaveBeenCalled();
    done();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthServiceStub } from '../../testing/stubs/auth-service.stub.spec';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { LoginFailure, LoginSuccess, LogOutFailure, LogOutSuccess } from '../../actions/auth.actions';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import { userMock } from '../../testing/mock-data/user.mock';
import { User } from 'oidc-client';
import { IAuthSuccessModel } from '../../models/auth-success.model';
import { logSuccessMocks } from '../../testing/mock-data/auth-success-model';
import { cold } from 'jasmine-marbles';
import { Router } from '@angular/router';
import { RouterStub } from '../../../shared/stubs/router.stub';


describe('[AUTH] [SERVICE] AUTH-SERVICE', () => {
  let authService: AuthService;
  let store: Store<fromCore.CoreState>;

  /** Simulating Error Catch Block */
  let testError: Error;

  /** Mock Models */
  let testUser: User;
  let authSuccessModel: IAuthSuccessModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.routerReducers,
          auth: combineReducers(fromAuth.authStateReducer),
          core: combineReducers(fromCore.coreStateReducer)
        })],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub }]
    });
  });
  /** Initialize */
  beforeEach(() => {
    authService = TestBed.get(AuthService);
    store = TestBed.get(Store);

    /** Register Mocks Models */
    testUser = userMock;
    authSuccessModel = logSuccessMocks;

    /** Error Initialize */
    testError = new Error('Network Failure');

    /** Spies Registration*/
    spyOn(store, 'dispatch');
    spyOn(authService, 'clearOidcSession');
  });

  /** Clean Up */
  afterEach(() => {
    authService = null;
    store = null;
    testError = null;
    testUser = null;
    authSuccessModel = null;
  });

  //#region Initialize Test Cases
  // /** Test Cases :
  //  *  - At Initialize
  //  *    - Check if User Exist Dispatch Login Success.
  //  *    - Register User Manager Events.
  //  */
  // it('should verify if user exists then dispatch Login Success Action', (done) => {
  //   /** Simulate Oidc Library */
  //   spyOn(authService.mgr, 'getUser').and.callFake(() => {
  //     return new Promise(function (resolve, reject) {
  //       resolve(testUser);
  //     });
  //   });

  //   expect(authService.mgr.getUser).toHaveBeenCalled();

  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     new LoginSuccess(
  //       <IAuthSuccessModel>{
  //         sub: testUser.profile.sub,
  //         userLogin: testUser.profile.name,
  //         role: testUser.profile.role,
  //         isLogged: true
  //       })
  //   );
  //   done();
  // });
  // it('should call setAuthenticationEvents every time auth service instance created', () => {
  //   expect(authService.setAuthenticationEvents).toHaveBeenCalled();
  // });
  //#endregion

  describe('IsAdmin', () => {
    /** Test Cases :
     *  - Should Return True if Store Say True.
     *  - Otherwise Return false
     */
    it('should return true if auth store say true', (done) => {
      const expected = cold('a', { a: true });
      /** Spy On Store Select */
      spyOn(store, 'select').and.callFake(() => expected);

      const result = authService.isAdmin();

      expect(result).toEqual(expected);

      done();
    });
    it('should return false if auth store say false', (done) => {
      const expected = cold('a', { a: false });
      /** Spy On Store Select */
      spyOn(store, 'select').and.callFake(() => expected);

      const result = authService.isAdmin();

      expect(result).toEqual(expected);

      done();
    });
  });
  describe('signInRedirect', () => {
    /**
     *  Bad Cases signInRedirect :
     *  - LoginFailure Action Dispatch
     */

    it('should dispatch login failure action when error occured', (done) => {
      /** Mock Signin Redirect In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinRedirect').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.signInRedirect().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('signInPopUp', () => {
    /**
     *  Bad Cases signInPopUp :
     *  - LoginFailure Action Dispatch
     */

    it('should dispatch login failure action when error occured', (done) => {
      /** Mock Signin Popup In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinPopup').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.signInPopUp().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('signInSilent', () => {
    /**
     *  Bad Cases signInSilent :
     *  - LoginFailure Action Dispatch
     */

    it('should dispatch login failure action when error occured', (done) => {
      /** Mock Signin Silent In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinSilent').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.signInSilent().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('completeRedirectAuthentication', () => {
    /**
     *  Good Cases completeRedirectAuthentication :
     *  - Login Success Action Dispatch By relevant Models.
     *  Bad Cases completeRedirectAuthentication :
     *  - Login Failure Action Dispatch.
     */

    it('should dispatch login success action when application working', (done) => {
      /** Mock signinRedirectCallback In Oidc Library.
       *  Simulate Resolve Scenario.
       */
      spyOn(authService.mgr, 'signinRedirectCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          resolve(testUser);
        }));

      /** Executing & Expectation */
      authService.completeRedirectAuthentication().then(() => {
        /** Expect Login Success Has been Dispatched */
        expect(store.dispatch).toHaveBeenCalledWith(new LoginSuccess(authSuccessModel));
      });

      /** Finishing Up */
      done();
    });
    it('should dispatch login failure action when error Occured', (done) => {
      /** Mock signinRedirectCallback In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinRedirectCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.completeRedirectAuthentication().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('completeSilentAuthentication', () => {
    /**
     *  Good Cases completeSilentAuthentication :
     *  - Login Success Action Dispatch By relevant Models.
     *  Bad Cases completeSilentAuthentication :
     *  - Login Failure Action Dispatch.
     */

    it('should dispatch login success action when application working', (done) => {
      /** Mock completeSilentAuthentication In Oidc Library.
       *  Simulate Resolve Scenario.
       */
      spyOn(authService.mgr, 'signinSilentCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          resolve(testUser);
        }));

      /** Init Variables */
      authService.user = testUser;

      /** Executing & Expectation */
      authService.completeSilentAuthentication().then(() => {
        /** Expect Login Success Has been Dispatched */
        expect(store.dispatch).toHaveBeenCalledWith(new LoginSuccess(authSuccessModel));
      });

      /** Finishing Up */
      done();
    });
    it('should dispatch login failure action when error Occured', (done) => {
      /** Mock completeSilentAuthentication In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinSilentCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.completeSilentAuthentication().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('completePopUpAuthentication', () => {
    /**
     *  Good Cases completePopUpAuthentication :
     *  - Login Success Action Dispatch By relevant Models.
     *  Bad Cases completePopUpAuthentication :
     *  - Login Failure Action Dispatch.
     */

    it('should dispatch login success action when application working', (done) => {
      /** Mock completePopUpAuthentication In Oidc Library.
       *  Simulate Resolve Scenario.
       */
      spyOn(authService.mgr, 'signinPopupCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          resolve(testUser);
        }));

      /** Init Variables */
      authService.user = testUser;

      /** Executing & Expectation */
      authService.completePopUpAuthentication().then(() => {
        /** Expect Login Success Has been Dispatched */
        expect(store.dispatch).toHaveBeenCalledWith(new LoginSuccess(authSuccessModel));
      });

      /** Finishing Up */
      done();
    });
    it('should dispatch login failure action when error Occured', (done) => {
      /** Mock completeSilentAuthentication In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signinPopupCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.completePopUpAuthentication().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LoginFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('startLogoutRedirect', () => {
    /**
     *  Bad Case startLogoutRedirect :
     *  - Logout Failure Action Dispatch.
     */

    it('should dispatch logout failure action when error Occured', (done) => {
      /** Mock startLogoutRedirect In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signoutRedirect').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.startLogoutRedirect().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('completeLogoutRedirect', () => {
    /**
     *  Good Cases completeLogoutRedirect :
     *  - LogOut Success Action Dispatch
     *  - Clear Session
     *  Bad Cases completeLogoutRedirect :
     *  - Logout Failure Action Dispatch.
     */

    it('should dispatch login success action when application working', (done) => {
      /** Mock completeLogoutRedirect In Oidc Library.
       *  Simulate Resolve Scenario.
       */
      spyOn(authService.mgr, 'signoutRedirectCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          resolve();
        }));

      /** Executing & Expectation */
      authService.completeLogoutRedirect().then(() => {
        /** Expect Login Success Has been Dispatched */
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutSuccess());
        expect(authService.clearOidcSession).toHaveBeenCalled();
      });

      /** Finishing Up */
      done();
    });
    it('should dispatch login failure action when error Occured', (done) => {
      /** Mock completeLogoutRedirect In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signoutRedirectCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.completeLogoutRedirect().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('startLogoutPopUp', () => {
    /**
     *  Bad Case startLogoutPopUp :
     *  - Logout Failure Action Dispatch.
     */

    it('should dispatch logout failure action when error Occured', (done) => {
      /** Mock startLogoutPopUp In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signoutPopup').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.startLogoutPopUp().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });

  describe('completeLogoutPopUp', () => {
    /**
     *  Good Cases completeLogoutPopUp :
     *  - LogOut Success Action Dispatch
     *  - Clear Session
     *  Bad Cases completeLogoutPopUp :
     *  - Logout Failure Action Dispatch.
     */

    it('should dispatch login success action when application working', (done) => {
      /** Mock completeLogoutPopUp In Oidc Library.
       *  Simulate Resolve Scenario.
       */
      spyOn(authService.mgr, 'signoutPopupCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          resolve();
        }));

      /** Executing & Expectation */
      authService.completeLogoutPopUp().then(() => {
        /** Expect Login Success Has been Dispatched */
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutSuccess());
        expect(authService.clearOidcSession).toHaveBeenCalled();
      });

      /** Finishing Up */
      done();
    });
    it('should dispatch login failure action when error Occured', (done) => {
      /** Mock completeLogoutPopUp In Oidc Library.
       *  Simulate Reject Scenario.
       */
      spyOn(authService.mgr, 'signoutPopupCallback').and
        .callFake(() => new Promise(function (resolve, reject) {
          reject(testError);
        }));

      /** Executing & Expectation */
      authService.completeLogoutPopUp().then(() => {
        expect(store.dispatch).toHaveBeenCalledWith(new LogOutFailure(testError));
      });

      /** Finishing Up */
      done();
    });
  });
});

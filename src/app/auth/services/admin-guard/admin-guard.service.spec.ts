import { TestBed, inject } from '@angular/core/testing';

import { AdminGuardService } from './admin-guard.service';
import { StoreModule, combineReducers } from '@ngrx/store';
import { Store } from '@ngrx/store/src/store';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import { RouterStub } from '../../../shared/stubs/router.stub';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthServiceStub } from '../../testing/stubs/auth-service.stub.spec';
import { cold } from 'jasmine-marbles';

describe('[AUTH] [SERVICE] ADMIN-GUARD-SERVICE', () => {
  let adminGuardService: AdminGuardService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.routerReducers,
          auth: combineReducers(fromAuth.authStateReducer),
          core: combineReducers(fromCore.coreStateReducer)
        })],
      providers: [AdminGuardService,
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub }]
    });
  });

  beforeEach(() => {
    /** Dependencies */
    adminGuardService = TestBed.get(AdminGuardService);
    router = TestBed.get(Router);

    /** Spies */
    spyOn(router, 'navigateByUrl').and.callThrough();
  });

  afterEach(() => {
    adminGuardService = null;
    router = null;
  });

  /** Test Cases :
   *  - If User Role Has no Administrator Role Denied Access To Admin Module.
   *  - Redirect User To Not Authorized Page If User Access Denied.
   */
  it('should be redirect to not Authorized page, when user is not authorized as admin and return false ',
    (done) => {
      /** Mock Is Admin Is Not Authorized */
      adminGuardService.isAdmin = false;

      /** actions */
      const result = adminGuardService.canActivateChild(null, null);

      /** Assertation */
      expect(router.navigateByUrl).toHaveBeenCalledWith('/not-authorized');
      expect(result).toBeFalsy();

      done();
    });
  it('should be not redirect to not Authorized page, when user is authorized as admin and return true ',
    (done) => {
      /** Mock Is Admin Is Authorized */
      adminGuardService.isAdmin = true;

      /** actions */
      const result = adminGuardService.canActivateChild(null, null);

      /** Assertation */
      expect(router.navigateByUrl).not.toHaveBeenCalledWith('/not-authorized');
      expect(result).toBeTruthy();

      done();
    });
});

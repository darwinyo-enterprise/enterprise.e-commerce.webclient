//#region imports
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthEffects } from './auth.effects';
import { TestBed, async } from '@angular/core/testing';
import { hot, cold } from 'jasmine-marbles';

import { NavLogged } from '../../shared/actions/navbar-buttons.actions';
import { Login, LoginSuccess, LoginFailure, Logout, LogOutSuccess, LogOutFailure, RegistrationRedirect } from '../actions/auth.actions';
import { Alert, Errors } from '../../core/actions/pop-up.actions';

import * as fromRoot from './../../reducers/app-state.reducer';
import * as fromAuth from './../reducers/auth-state.reducer';
import * as fromCore from './../../core/reducers/core-state.reducer';
import * as fromShared from './../../shared/reducers/shared-state.reducer';

import { Router } from '@angular/router';
//#endregion
import { AuthEffectMessage, Backend_Error_NoResponse } from '../../shared/consts/validation-message.const';
import { URLsClient } from '../../shared/consts/url.const';
import { IAuthSuccessModel } from '../models/auth-success.model';
import { logSuccessMocks } from '../testing/mock-data/auth-success-model';
import { AuthService } from '../services/auth/auth.service';
import { RouterStub } from '../../shared/stubs/router.stub';
import { AuthServiceStub } from '../testing/stubs/auth-service.stub.spec';
import { AlertModel } from '../../core/models/dialogs/alert.model';
import { errorMocks } from '../../shared/mock-data/error-mock';

/** Test Cases Auth Effects */
describe('[AUTH] [EFFECT] AUTH-EFFECT', () => {

    //#region properties
    let authSuccessModel: IAuthSuccessModel;

    let authEffect: AuthEffects;

    let actions: Observable<any>;

    let router: Router;
    let store: Store<fromCore.CoreState>;

    let authService: AuthService;

    let expected: Observable<any>;
    let error: Error;

    //#endregion

    //#region inits items & dispose items
    /** Initialize Testing Module... */
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.routerReducers,
                    auth: combineReducers(fromAuth.authStateReducer),
                    core: combineReducers(fromCore.coreStateReducer),
                    shared: combineReducers(fromShared.sharedStateReducer)
                })
            ],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: AuthService, useClass: AuthServiceStub }
            ]
        });
    });

    /** Preparing dependecies, initialize spies... */
    beforeEach(() => {
        // Populate Test Data
        authSuccessModel = logSuccessMocks;
        error = errorMocks;

        // Inject Dependecies...
        /** Registers for Root Injector, Means registered on Eagerly Loaded Modules DI */
        store = TestBed.get(Store);
        router = TestBed.get(Router);
        authService = TestBed.get(AuthService);

        // Instantiate Spies.
        spyOn(store, 'dispatch').and.callThrough();
        spyOn(router, 'navigate').and.callThrough();
        spyOn(authService, 'signInRedirect');
        spyOn(authService, 'startLogoutRedirect');
        spyOn(authService, 'registrationRedirect');
        // AuthServiceSpy Will Instantiate in Each Test Case...
    });

    /** Clean Up Memory */
    afterEach(() => {
        authSuccessModel = null;
        authEffect = null;
        actions = null;
        router = null;
        store = null;
        expected = null;
    });
    //#endregion
    //#region test suites

    describe('login$', () => {
        /** Test Cases For Login :
         *
         *  - Expected Outcome :
         *      - Call Auth Service To Login.
         */
        it('should Call Auth Service To Start Login', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new Login() });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new Login()
            });

            /** Assertation... */
            expect(authEffect.login$).toBeObservable(expected);

            /** Expect Auth Service Signin Triggered */
            expect(authService.signInRedirect).toHaveBeenCalled();

            done();
        });
    });

    describe('loginSuccess$', () => {
        /** Test Cases For Login Success :
         *
         *  o Notes :
         *      - User Will Logged After user redirected back from RP when User Successfully authenticate.
         *      - RP Will Pass Authorization Code to CLIENT as Session Key.
         *      - CLIENT will use Session Key As Authentication reference.
         *      - As Long CLIENT has Propriate Session Key, CLIENT will remain authenticate.
         *
         *  - Expected Outcome :
         *      - Alert Pop up Notificate User Successfully Logged.
         *      - Navbar Will be set to Logged state.
         *      - User Will redirected to Homepage.
         */
        it('should dispatch Alert, NavLogged & ConnectingChatHub actions and should navigate to homepage', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new LoginSuccess(authSuccessModel) });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new LoginSuccess(authSuccessModel)
            });

            /** Assertation... */
            expect(authEffect.loginSuccess$).toBeObservable(expected);

            /** Expect Pop-up Action Dispatch Triggered */
            expect(store.dispatch).toHaveBeenCalledWith(
                new Alert(
                    new AlertModel(
                        AuthEffectMessage.LoginSuccess,
                        'Notif'
                    )));

            /** Expect Logged Navbar Action Dispatch Triggered */
            expect(store.dispatch).toHaveBeenCalledWith(new NavLogged());

            /** Expect User Navigated To HomePage */
            expect(router.navigate).toHaveBeenCalledWith([URLsClient.urlHome]);

            done();
        });
    });

    describe('loginFailure$', () => {
        /** Test Cases For Login Failure :
         *
         *  - Expected Outcome :
         *      - Alert Pop up Login Failure.
         */
        it('should dispatch Error', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new LoginFailure(error) });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new LoginFailure(error)
            });

            /** Assertation... */
            expect(authEffect.loginFailure$).toBeObservable(expected);

            /** Expect Pop-up Action Dispatch Triggered */
            expect(store.dispatch).toHaveBeenCalledWith(
                new Errors(
                    new AlertModel(
                        error.message,
                        'Error Occured!'
                    )));

            done();
        });
    });

    describe('logout$', () => {
        /** Test Cases For Logout Relying Party :
         *
         *  - Expected Outcome :
         *      - Call Auth Service To Logout RP And Application That Rely on that.
         */
        it('should call startLogoutRedirect service', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new Logout() });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new Logout()
            });

            /** Assertation... */
            expect(authEffect.logout$).toBeObservable(expected);

            /** Expect Auth Service Start Logout Triggered */
            expect(authService.startLogoutRedirect).toHaveBeenCalled();

            done();
        });
    });

    describe('logoutSuccess$', () => {
        /** Test Cases For Logout Success :
         *
         *  - Expected Outcome :
         *      - Alert Pop up Logout Success.
         */
        it('should dispatch Alert', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new LogOutSuccess() });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new LogOutSuccess()
            });

            /** Assertation... */
            expect(authEffect.logoutSuccess$).toBeObservable(expected);

            /** Expect Pop-up Action Dispatch Triggered */
            expect(store.dispatch).toHaveBeenCalledWith(
                new Alert(
                    new AlertModel(AuthEffectMessage.LogOutSuccess, 'Notif')));

            done();
        });
    });

    describe('logoutFailure$', () => {
        /** Test Cases For Logout Failure :
         *
         *  - Expected Outcome :
         *      - Alert Pop up Logout Success.
         */
        it('should dispatch Error', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new LogOutFailure(error) });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new LogOutFailure(error)
            });

            /** Assertation... */
            expect(authEffect.logoutFailure$).toBeObservable(expected);

            /** Expect Pop-up Action Dispatch Triggered */
            expect(store.dispatch).toHaveBeenCalledWith(
                new Errors(
                    new AlertModel(error.message, 'Error Occured!')));

            done();
        });
    });
    describe('registrationRedirect$', () => {
        /** Test Cases For Registration Redirect :
         *
         *  - Expected Outcome :
         *      - Call Auth Service To Registration Redirect.
         */
        it('should Call Auth Service To Start Login', (done) => {
            // Using jasmine-marble for mocking observable
            /** Action To Trigger */
            actions = cold('a', { a: new RegistrationRedirect() });

            /** Initialize Effect Test */
            authEffect = new AuthEffects(new Actions(actions), router, store, authService);

            /** Expected Result.*/
            expected = cold('b', {
                b: new RegistrationRedirect()
            });

            /** Assertation... */
            expect(authEffect.registrationRedirect$).toBeObservable(expected);

            /** Expect Registration Redirect Service Called Triggered */
            expect(authService.registrationRedirect).toHaveBeenCalled();

            done();
        });
    });
    //#endregion
});

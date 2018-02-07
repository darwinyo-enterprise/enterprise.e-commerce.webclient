// import { Actions } from '@ngrx/effects';
// import { cold } from 'jasmine-marbles';
// import { StoreModule, combineReducers, Store } from '@ngrx/store';
// import { async, TestBed } from '@angular/core/testing';
// import { NavbarContainerEffects } from './navbar-container.effects';
// import { Observable } from 'rxjs/Rx';
// import { SearchService } from './../services/search/search.service';
// import * as fromRoot from './../../reducers/app-state.reducer';
// import * as fromAuth from './../../auth/reducers/auth-state.reducer';
// import * as fromCore from './../reducers/core-state.reducer';
// import * as NavbarActions from './../actions/navbar-container.actions';
// describe('[CORE] [EFFECT] NAVBAR-CONTAINER-EFFECT', () => {
//     //#region properties
//     let actions: Observable<any>;
//     let navbarEffect: NavbarContainerEffects;
//     let expected: Observable<any>;
//     let coreStore: Store<fromCore.State>;
//     let coreStoreSpy: jasmine.Spy;
//     //#endregion
//     //#region inits items & dispose items
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 StoreModule.forRoot({
//                     ...fromRoot.routerReducers,
//                     auth: combineReducers(fromAuth.authStateReducer),
//                     core: combineReducers(fromCore.coreStateReducer)
//                 })
//             ]
//         });
//     }));
//     beforeEach(async(() => {
//         coreStore = TestBed.get(Store);
//         coreStoreSpy = spyOn(coreStore, 'dispatch');
//     }));
//     afterEach(() => {
//     });
//     //#endregion
//     //#region test suites
//     describe('logged$', () => {
//         it('should dispatch toggle login action when login action called', (done) => {
//             actions = cold('a|', { a: new NavbarActions.NavLogged() });
//             navbarEffect = new NavbarContainerEffects(new Actions(actions), coreStore);
//             expected = cold('b|', { b: new NavbarActions.NavLogged() });
//             expect(navbarEffect.logged$).toBeObservable(expected);
//             expect(coreStore.dispatch).toHaveBeenCalledWith(new NavbarActions.ToggleLogin());
//             done();
//         });
//     });
//     //#endregion
// });

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromCore from './../../core/reducers/core-state.reducer';
import { NavbarButtonsActionTypes } from '../actions/navbar-buttons.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class NavbarButtonsEffects {
    @Effect({ dispatch: false })
    navLogged$ = this.actions$.pipe(
        ofType(NavbarButtonsActionTypes.NAV_LOGGED),
        tap(() => console.log('navbar logged'))
    );

    @Effect({ dispatch: false })
    navLogout$ = this.actions$.pipe(
        ofType(NavbarButtonsActionTypes.NAV_LOGOUT),
        tap(() => console.log('Nav Logout'))
    );

    constructor(private actions$: Actions,
        private coreStore: Store<fromCore.CoreState>) { }
}

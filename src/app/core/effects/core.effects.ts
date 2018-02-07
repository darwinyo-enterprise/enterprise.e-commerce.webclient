import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromCore from './../reducers/core-state.reducer';
import { map } from 'rxjs/operators/map';
import { PopUpActionTypes } from '../actions/pop-up.actions';
@Injectable()
export class CoreEffects {
    @Effect({ dispatch: false })
    error$ = this.actions$
        .ofType(PopUpActionTypes.ERROR)
        .do(() => console.log('Error'));
    @Effect({ dispatch: false })
    alert$ = this.actions$
        .ofType(PopUpActionTypes.ALERT)
        .do(() => console.log('alert'));
    @Effect({ dispatch: false })
    confirm$ = this.actions$
        .ofType(PopUpActionTypes.CONFIRM)
        .do(() => console.log('confirm'));
    @Effect({ dispatch: false })
    prompt$ = this.actions$
        .ofType(PopUpActionTypes.PROMPT)
        .do(() => console.log('prompt'));
    @Effect({ dispatch: false })
    clear$ = this.actions$
        .ofType(PopUpActionTypes.CLEAR)
        .do(() => console.log('clear'));

    constructor(private actions$: Actions,
        private coreStore: Store<fromCore.CoreState>) { }
}

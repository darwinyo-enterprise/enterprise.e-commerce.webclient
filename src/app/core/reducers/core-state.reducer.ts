import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPopUp from './../reducers/pop-up.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';

export interface CoreState {
    coreState: fromPopUp.PopUpState;
}

export const coreStateReducer: ActionReducerMap<CoreState> = {
    coreState: fromPopUp.popUpReducer
};

/** Selector Of Core State */
export const selectCoreState = createFeatureSelector<CoreState>('core');

//#region popup state
export const selectPopUpState = createSelector(
    selectCoreState,
    (state: CoreState) => state.coreState
);

/** Get Alert Model Observables Stream for Trigger Pop Up */
export const getAlert = createSelector(
    selectPopUpState,
    fromPopUp.getAlert
);

/** Get Error Model Observables Stream for Trigger Pop Up */
export const getError = createSelector(
    selectPopUpState,
    fromPopUp.getError
);

/** Get Confirm Model Observables Stream for Trigger Pop Up */
export const getConfirm = createSelector(
    selectPopUpState,
    fromPopUp.getConfirm
);

/** Get Prompt Model Observables Stream for Trigger Pop Up */
export const getPrompt = createSelector(
    selectPopUpState,
    fromPopUp.getPrompt
);
//#endregion

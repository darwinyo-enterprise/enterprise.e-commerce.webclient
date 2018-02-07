import * as fromNavbarButtons from './navbar-buttons.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/src/models';

export interface SharedState {
    navbarButtonsState: fromNavbarButtons.NavbarButtonsState;
}

export const sharedStateReducer: ActionReducerMap<SharedState> = {
    navbarButtonsState: fromNavbarButtons.navbarButtonsReducer
};

/** Selector Shared State */
export const selectSharedState = createFeatureSelector<SharedState>('shared');

/** Selector For NavbarButtons State */
export const selectNavbarButtonsState = createSelector(
    selectSharedState,
    (state: SharedState) => state.navbarButtonsState
);

/** Get Navbar Button Logged State */
export const getNavbarButtonsLogged = createSelector(
    selectNavbarButtonsState,
    fromNavbarButtons.getNavbarButtonsLogged
);

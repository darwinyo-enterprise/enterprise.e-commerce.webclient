import * as fromAuth from './auth.reducer';
import * as fromRoot from './../../reducers/app-state.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/src/models';

export interface AuthState {
    userState: fromAuth.AuthState;
}

export const authStateReducer: ActionReducerMap<AuthState> = {
    userState: fromAuth.authReducer
};

/** Selector For Auth State */
export const selectAuthState = createFeatureSelector<AuthState>('auth');

/** Selector for User State */
export const selectUserState = createSelector(
    selectAuthState,
    (state: AuthState) => state.userState
);

/** Selector For Get Logged In State */
export const getLoggedIn = createSelector(
    selectUserState,
    fromAuth.getLoggedIn
);

/** Selector For Get User Login */
export const getUserLogin = createSelector(
    selectUserState,
    fromAuth.getUserLogin
);

/** Selector For Get Error State */
export const getError = createSelector(
    selectUserState,
    fromAuth.getError
);

/** Selector For Get User Role */
export const getUserRole = createSelector(
    selectUserState,
    fromAuth.getUserRole
);

/** Selector For Get Is Admin Role */
export const getIsAdmin = createSelector(
    selectUserState,
    fromAuth.getIsAdmin
);

/** Selector For Get User Email */
export const getUserEmail = createSelector(
    selectUserState,
    fromAuth.getUserEmail
);

/** Selector For Get User Sub (GUID) */
export const getSub = createSelector(
    selectUserState,
    fromAuth.getSub
);

import { AuthActionTypes, AuthActions, LoginSuccess, LoginFailure, LogOutFailure } from './../actions/auth.actions';
import { Action } from '@ngrx/store';
import { RoleHelper } from '../../shared/helper/role.helper';
import { AppRoles } from '../../shared/consts/app-roles.const';


export interface AuthState {
    sub: string;
    userLogin: string;
    isLogged: boolean;
    isAdmin: boolean;
    error: Error;
    userRole: string[];
    userEmail: string;
}
export const INITIAL_STATE = {
    sub: null,
    userLogin: null,
    isLogged: false,
    isAdmin: false,
    userRole: null,
    userEmail: null,
    error: null
};
export function authReducer(state: AuthState = INITIAL_STATE, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOG_IN_SUCCESS: {
            const roles = (<LoginSuccess>action).payload.userRole;
            return {
                ...state,
                sub: (<LoginSuccess>action).payload.sub,
                userLogin: (<LoginSuccess>action).payload.userLogin,
                isLogged: (<LoginSuccess>action).payload.isLogged,
                userEmail: (<LoginSuccess>action).payload.userEmail,
                userRole: roles,
                /** Used Helper For Checking Is Administartor Role Exists */
                isAdmin: RoleHelper.IsInRole(AppRoles.Administrator, roles),
                error: null
            };
        }
        case AuthActionTypes.LOG_OUT_SUCCESS: {
            return {
                ...state,
                sub: null,
                userLogin: null,
                userEmail: null,
                isLogged: false,
                userRole: null,
                isAdmin: null,
                error: null
            };
        }
        case AuthActionTypes.LOG_IN_FAILURE: {
            return {
                ...state,
                error: (<LoginFailure>action).payload
            };
        }
        case AuthActionTypes.LOG_OUT_FAILURE: {
            return {
                ...state,
                error: (<LogOutFailure>action).payload
            };
        }
        default:
            return state;
    }
}

export const getLoggedIn = (state: AuthState) => state.isLogged;
/** Get UserLogin */
export const getUserLogin = (state: AuthState) => state.userLogin;
/** Get User Roles */
export const getUserRole = (state: AuthState) => state.userRole;
/** Get User Email */
export const getUserEmail = (state: AuthState) => state.userEmail;
/** Get is Admin Role */
export const getIsAdmin = (state: AuthState) => state.isAdmin;
/** Get UserID */
export const getSub = (state: AuthState) => state.sub;
export const getError = (state: AuthState) => state.error;

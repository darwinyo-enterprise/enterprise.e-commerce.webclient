import { Action } from '@ngrx/store';
import { IAuthSuccessModel } from '../models/auth-success.model';

export enum AuthActionTypes {
    LOG_IN = '[AUTH] LOG_IN',
    LOG_OUT = '[AUTH] LOG_OUT',
    LOG_IN_SUCCESS = '[AUTH] LOG_IN_SUCCESS',
    LOG_OUT_SUCCESS = '[AUTH] LOG_OUT_SUCCESS',
    LOG_IN_FAILURE = '[AUTH] LOG_IN_FAILURE',
    LOG_OUT_FAILURE = '[AUTH] LOG_OUT_FAILURE',
    REGISTRATION_REDIRECT = '[AUTH] REGISTRATION_REDIRECT'
}

/** Used For Attempt Register */
export class RegistrationRedirect implements Action {
    readonly type: string = AuthActionTypes.REGISTRATION_REDIRECT;
}

/** Used For Attempt Login */
export class Login implements Action {
    readonly type: string = AuthActionTypes.LOG_IN;
}

/** Used For Attempt Logout*/
export class Logout implements Action {
    readonly type: string = AuthActionTypes.LOG_OUT;
}

export class LoginSuccess implements Action {
    readonly type: string = AuthActionTypes.LOG_IN_SUCCESS;
    constructor(public payload: IAuthSuccessModel) { }
}
export class LoginFailure implements Action {
    readonly type: string = AuthActionTypes.LOG_IN_FAILURE;
    constructor(public payload: Error) { }
}

export class LogOutSuccess implements Action {
    readonly type: string = AuthActionTypes.LOG_OUT_SUCCESS;
}
export class LogOutFailure implements Action {
    readonly type: string = AuthActionTypes.LOG_OUT_FAILURE;
    constructor(public payload: Error) { }
}

export type AuthActions =
    | Login
    | Logout

    | LoginSuccess
    | LoginFailure

    | LogOutSuccess
    | LogOutFailure

    | RegistrationRedirect;

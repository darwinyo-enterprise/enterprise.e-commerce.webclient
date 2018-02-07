import { Action } from '@ngrx/store';

export enum NavbarButtonsActionTypes {
    NAV_LOGGED = '[SHARED] [NAVBAR_BUTTONS] NAV_LOGGED',
    NAV_LOGOUT = '[SHARED] [NAVBAR_BUTTONS] NAV_LOGOUT'
}

export class NavLogged implements Action {
    readonly type: string = NavbarButtonsActionTypes.NAV_LOGGED;
}
export class NavLogout implements Action {
    readonly type: string = NavbarButtonsActionTypes.NAV_LOGOUT;
}
export type NavbarButtonsActions =
    | NavLogged
    | NavLogout;

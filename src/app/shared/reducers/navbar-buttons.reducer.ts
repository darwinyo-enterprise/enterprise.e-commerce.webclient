import { NavbarButtonsActions, NavbarButtonsActionTypes } from '../actions/navbar-buttons.actions';

export interface NavbarButtonsState {
    logged: boolean;
}

export const INITIAL_STATE = {
    logged: false
};

export function navbarButtonsReducer(state = INITIAL_STATE, action: NavbarButtonsActions): NavbarButtonsState {
    switch (action.type) {
        case NavbarButtonsActionTypes.NAV_LOGGED: {
            return {
                ...state,
                logged: true
            };
        }
        case NavbarButtonsActionTypes.NAV_LOGOUT: {
            return {
                ...state,
                logged: false
            };
        }
        default:
            return state;
    }
}

/** Get Navbar Button Logged State */
export const getNavbarButtonsLogged = (state: NavbarButtonsState) => state.logged;

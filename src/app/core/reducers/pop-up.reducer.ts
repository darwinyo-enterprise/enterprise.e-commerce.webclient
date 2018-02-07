import { ConfirmModel } from '../models/dialogs/confirm.model';
import { AlertModel } from '../models/dialogs/alert.model';
import { PromptModel } from '../models/dialogs/prompt.model';
import { PopUpActions, PopUpActionTypes, Alert, Errors, Confirm, Prompt } from '../actions/pop-up.actions';


export interface PopUpState {
    alert: AlertModel | null;
    error: AlertModel | null;
    confirm: ConfirmModel | null;
    prompt: PromptModel | null;
}

export const INITIAL_STATE = {
    alert: null,
    error: null,
    confirm: null,
    prompt: null
};

/** Pop Up Reducer */
export function popUpReducer(state = INITIAL_STATE, action: PopUpActions): PopUpState {
    switch (action.type) {
        case PopUpActionTypes.ALERT: {
            return {
                ...state,
                alert: (<Alert>action).payload
            };
        }
        case PopUpActionTypes.ERROR: {
            return {
                ...state,
                error: (<Errors>action).payload
            };
        }
        case PopUpActionTypes.CONFIRM: {
            return {
                ...state,
                confirm: (<Confirm>action).payload
            };
        }
        case PopUpActionTypes.PROMPT: {
            return {
                ...state,
                prompt: (<Prompt>action).payload
            };
        }
        case PopUpActionTypes.CLEAR: {
            return {
                ...state,
                alert: null,
                error: null,
                confirm: null,
                prompt: null
            };
        }
        default:
            return state;
    }
}

/** Get Alert Model Observables Stream for Trigger Pop Up */
export const getAlert = (state: PopUpState) => state.alert;

/** Get Error Model Observables Stream for Trigger Pop Up */
export const getError = (state: PopUpState) => state.error;

/** Get Confirm Model Observables Stream for Trigger Pop Up */
export const getConfirm = (state: PopUpState) => state.confirm;

/** Get Prompt Model Observables Stream for Trigger Pop Up */
export const getPrompt = (state: PopUpState) => state.prompt;

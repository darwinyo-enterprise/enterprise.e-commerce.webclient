import { AlertModel } from '../models/dialogs/alert.model';
import { ConfirmModel } from '../models/dialogs/confirm.model';
import { PromptModel } from '../models/dialogs/prompt.model';

import { Action } from '@ngrx/store';

/** Pop Up Actions Types. */
export enum PopUpActionTypes {
    ALERT = '[CORE] ALERT',
    CONFIRM = '[CORE] CONFIRM',
    PROMPT = '[CORE] PROMPT',
    ERROR = '[CORE] ERROR',
    /** Used for Clearing State Pop up */
    CLEAR = '[CORE] CLEAR'
}

export class Alert implements Action {
    readonly type: string = PopUpActionTypes.ALERT;
    constructor(public payload: AlertModel) { }
}

export class Confirm implements Action {
    readonly type: string = PopUpActionTypes.CONFIRM;
    constructor(public payload: ConfirmModel) { }
}

export class Errors implements Action {
    readonly type: string = PopUpActionTypes.ERROR;
    constructor(public payload: AlertModel) { }
}

export class Prompt implements Action {
    readonly type: string = PopUpActionTypes.PROMPT;
    constructor(public payload: PromptModel) { }
}

/** Used For Clearing Pop Up States. */
export class Clear implements Action {
    readonly type: string = PopUpActionTypes.CLEAR;
}

export type PopUpActions =
    Alert |
    Confirm |
    Prompt |
    Errors |
    Clear;

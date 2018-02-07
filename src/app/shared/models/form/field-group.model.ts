export interface IFieldGroupModel {
    fieldTitle: string;
    fieldDefaultValue?: string;
    fieldValue: string;
    /** Validator Object */
    fieldValidator?: any;
    fieldValidatorMessage?: string;
}

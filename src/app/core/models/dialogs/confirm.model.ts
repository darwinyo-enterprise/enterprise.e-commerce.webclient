export interface ConfirmModel {
    cancelButton: string;
    acceptButton: string;
    message: string;
    title: string;
}
export class ConfirmModel implements ConfirmModel {
    cancelButton: string;
    acceptButton: string;
    message: string;
    title: string;

    constructor(
        message: string,
        title: string,
        cancelButton: string = 'Cancel',
        acceptButton: string = 'Accept') {
        this.acceptButton = acceptButton;
        this.cancelButton = cancelButton;
        this.message = message;
        this.title = title;
    }
}

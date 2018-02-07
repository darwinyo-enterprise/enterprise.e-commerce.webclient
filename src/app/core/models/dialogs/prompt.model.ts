export class PromptModel {
    cancelButton: string;
    acceptButton: string;
    value: string;
    message: string;
    title: string;

    constructor(
        value: string,
        message: string,
        title: string,
        cancelButton: string = 'Cancel',
        acceptButton: string = 'Accept') {
        this.value = value;
        this.message = message;
        this.acceptButton = acceptButton;
        this.cancelButton = cancelButton;
        this.title = title;
    }
}

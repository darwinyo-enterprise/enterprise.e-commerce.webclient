export class AlertModel {
    closeButton: string;
    message: string;
    title: string;
    constructor(message: string, title: string, closeButton: string = 'Close') {
        this.closeButton = closeButton;
        this.message = message;
        this.title = title;
    }
}

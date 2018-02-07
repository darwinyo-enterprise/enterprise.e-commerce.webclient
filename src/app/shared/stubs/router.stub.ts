export class RouterStub {
    navigate(commands: any[]) {
        return commands;
    }
    navigateByUrl(url: string) {
        return url;
    }
}

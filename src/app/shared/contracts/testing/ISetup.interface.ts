export interface IBaseTestingSetup {
    initControls(): void;
    initSpies(): void;
    cleanControls(): void;
}

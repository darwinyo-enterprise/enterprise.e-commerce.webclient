import { UserMenuComponent } from './../../../components/user-menu/user-menu.component';
import { ComponentFixture } from '@angular/core/testing';
import { IBaseTestingSetup } from './../../../../shared/contracts/testing/ISetup.interface';
export class UserMenuComponentSetup implements IBaseTestingSetup {
    componentEl: HTMLElement;
    navigateEventSpy: jasmine.Spy;
    constructor(
        private fixture: ComponentFixture<UserMenuComponent>,
        private comp: UserMenuComponent
    ) {
        this.initSpies();
    }
    initControls(): void {
        this.componentEl = this.fixture.debugElement.nativeElement;
    }
    initSpies(): void {
        this.navigateEventSpy = spyOn(this.comp.navigateEvent, 'emit');
    }
    cleanControls(): void {
        this.componentEl = null;
        this.navigateEventSpy = null;
    }
}

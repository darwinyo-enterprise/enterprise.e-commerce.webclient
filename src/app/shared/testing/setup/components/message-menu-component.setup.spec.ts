import { MessageMenuComponent } from './../../../components/message-menu/message-menu.component';
import { ComponentFixture } from '@angular/core/testing';
import { IBaseTestingSetup } from './../../../../shared/contracts/testing/ISetup.interface';
export class MessageMenuComponentSetup implements IBaseTestingSetup {
    componentEl: HTMLElement;
    navigateEventSpy: jasmine.Spy;
    constructor(
        private fixture: ComponentFixture<MessageMenuComponent>,
        private comp: MessageMenuComponent) {
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

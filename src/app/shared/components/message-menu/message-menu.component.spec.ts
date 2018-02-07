import { CovalentNotificationsModule } from '@covalent/core';
import { MatListModule, MatIconModule } from '@angular/material';
import { messageMenu } from './../../../shared/mock-data/message-menu';
import { IMenuModel } from './../../../shared/models/menu/menu.model';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessageMenuComponent } from './message-menu.component';
import { MessageMenuComponentSetup } from '../../testing/setup/components/message-menu-component.setup.spec';

describe('[CORE] [COMPONENT] MESSAGE-MENU-COMPONENT', () => {
  let component: MessageMenuComponent;
  let fixture: ComponentFixture<MessageMenuComponent>;
  let menuModel: IMenuModel[];
  let messageMenuComponentSetup: MessageMenuComponentSetup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageMenuComponent],
      imports: [MatListModule, MatIconModule, CovalentNotificationsModule]
    });
  }));
  function createComponent() {
    fixture = TestBed.createComponent(MessageMenuComponent);
    component = fixture.componentInstance;
    messageMenuComponentSetup = new MessageMenuComponentSetup(fixture, component);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      messageMenuComponentSetup.initControls();
    });
  }
  beforeEach(async(() => {
    createComponent();
    menuModel = messageMenu;
  }));
  afterEach(() => {
    component = null;
    fixture = null;
    messageMenuComponentSetup.cleanControls();
    messageMenuComponentSetup = null;
    menuModel = null;
  });
  describe('UI Tests', () => {
    it('should populate all Menu when Input is defined', () => {
      component.menuModel = menuModel;
      fixture.detectChanges();
      expect(messageMenuComponentSetup.componentEl.innerHTML).toContain(menuModel[0].menuTitle);
      expect(messageMenuComponentSetup.componentEl.innerHTML).toContain(menuModel[0].menuNotification.toString());
      expect(messageMenuComponentSetup.componentEl.innerHTML).toContain(menuModel[1].menuTitle);
      expect(messageMenuComponentSetup.componentEl.innerHTML).toContain(menuModel[1].menuNotification.toString());
      expect(messageMenuComponentSetup.componentEl.innerHTML).toContain(menuModel[2].menuTitle);
    });
  });
  describe('Functionality Tests', () => {
    it('should emit navigate event when menu clicked', () => {
      component.menuModel = menuModel;
      fixture.detectChanges();
      (<HTMLAnchorElement>messageMenuComponentSetup.componentEl.children[0]).click();
      expect(component.navigateEvent.emit).toHaveBeenCalledWith(menuModel[0].menuHref);
    });
  });
});

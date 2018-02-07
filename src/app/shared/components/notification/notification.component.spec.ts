import { MatIconModule, MatListModule } from '@angular/material';
import { notifications } from './../../../shared/mock-data/notifications';
import { NotificationModel } from './../../models/notification/notification.model';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotificationComponent } from './notification.component';
import { NotificationComponentSetup } from '../../testing/setup/components/notification-component.setup.spec';

describe('[CORE] [COMPONENT] NOTIFICATION-COMPONENT', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notification: NotificationModel[];
  let notificationComponentSetup: NotificationComponentSetup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      imports: [MatIconModule, MatListModule]
    });
  }));
  function createComponent() {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    notificationComponentSetup = new NotificationComponentSetup(fixture, component);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      notificationComponentSetup.initControls();
    });
  }
  beforeEach(async(() => {
    createComponent();
    notification = notifications;
  }));
  afterEach(() => {
    component = null;
    fixture = null;
    notification = null;
    notificationComponentSetup.cleanControls();
    notificationComponentSetup = null;
  });
  describe('UI Tests', () => {
    it('should populate Notifications when notification defined', () => {
      component.notification = notification;
      fixture.detectChanges();
      expect(notificationComponentSetup.componentEl.innerHTML).toContain(notification[0].notificationMessage);
      expect(notificationComponentSetup.componentEl.innerHTML).toContain(notification[0].notificationDate);
      expect(notificationComponentSetup.componentEl.innerHTML).toContain(notification[0].notificationIcon);
    });
    it('should not display Notifications when notification undefined', () => {
      fixture.detectChanges();
      expect(notificationComponentSetup.componentEl.innerHTML).not.toContain(notification[0].notificationMessage);
      expect(notificationComponentSetup.componentEl.innerHTML).not.toContain(notification[0].notificationDate);
      expect(notificationComponentSetup.componentEl.innerHTML).not.toContain(notification[0].notificationIcon);
    });
  });
  describe('Functionality Tests', () => {
    it('should emit navigateEvent when notification clicked', () => {
      component.notification = notification;
      fixture.detectChanges();
      (<HTMLAnchorElement>notificationComponentSetup.componentEl.children[0]).click();
      expect(component.navigateEvent.emit).toHaveBeenCalledWith(notification[0].notificationUrl);
    });
  });
});

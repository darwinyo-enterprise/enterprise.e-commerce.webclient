import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromShared from './../../reducers/shared-state.reducer';

import * as AuthActions from './../../../auth/actions/auth.actions';

import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { NotificationModel } from '../../models/notification/notification.model';
import { notifications } from '../../../shared/mock-data/notifications';
import { messageMenu } from '../../../shared/mock-data/message-menu';
import { userMenu } from '../../../shared/mock-data/user-menu';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--navbar-buttons',
  templateUrl: './navbar-buttons.container.html',
  styleUrls: ['./navbar-buttons.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NavbarButtonsContainer implements OnInit, OnDestroy {
  logged$: Observable<boolean>;
  unsubscribe$: ReplaySubject<boolean>;

  /** Models */
  userMenuModel: IMenuModel[];
  messageMenuModel: IMenuModel[];
  notification: NotificationModel[];

  constructor(
    private sharedStore: Store<fromShared.SharedState>
  ) {
    this.logged$ = this.sharedStore.select(fromShared.getNavbarButtonsLogged);
    this.unsubscribe$ = new ReplaySubject(1);

    /** Models */
    this.userMenuModel = [];
    this.messageMenuModel = [];
    this.notification = [];
  }

  ngOnInit() {
    this.userMenuModel = userMenu;
    this.messageMenuModel = messageMenu;
    this.notification = notifications;
  }

  /** Unsubscribe To Avoid Memory Dump */
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  onRegisterBtn_Clicked() {
    this.sharedStore.dispatch(new AuthActions.RegistrationRedirect());
  }
  onLoginBtn_Clicked() {
    this.sharedStore.dispatch(new AuthActions.Login());
  }
}

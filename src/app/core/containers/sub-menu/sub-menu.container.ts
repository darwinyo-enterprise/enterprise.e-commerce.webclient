import { Component, OnInit } from '@angular/core';

import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { navigationMenu } from '../../../shared/mock-data/navigation-menu';
import { MenuService } from '../../../shared/services/menu.service';
import { APPLICATION_KEY } from '../../../shared/consts/key-configuration.const';
import { RoleHelper } from '../../../shared/helper/role.helper';
import { Store } from '@ngrx/store';

import * as fromAuth from './../../../auth/reducers/auth-state.reducer';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'core--sub-menu',
  templateUrl: './sub-menu.container.html',
  styleUrls: ['./sub-menu.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SubMenuContainer implements OnInit {
  navMenu: IMenuModel[];

  roles: string[];
  unsubscribe$: ReplaySubject<boolean>;

  constructor(private menuService: MenuService,
    private authStore: Store<fromAuth.AuthState>) {
    this.navMenu = [];
    this.unsubscribe$ = new ReplaySubject(1);
  }

  ngOnInit() {
    this.menuService.getAllGeneralMenu(APPLICATION_KEY, true).subscribe((v) => {
      this.navMenu = v;
    });

    /** Select from Auth Store */
    this.authStore.select(fromAuth.getUserRole).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(state => {
      this.roles = state;
    });
  }
  /** used for Hide Unhide Menu By Current User Roles */
  filterPermission(permission: string[]) {
    return RoleHelper.HasPermissionRole(this.roles, permission);
  }
}

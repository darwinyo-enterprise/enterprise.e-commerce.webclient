import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { Router } from '@angular/router';
import { navigationMenu } from '../../mock-data/navigation-menu';
import { Store } from '@ngrx/store';

import * as fromAuth from './../../../auth/reducers/auth-state.reducer';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { RoleHelper } from '../../helper/role.helper';
import { IMenuListModel } from '../../models/menu/menu-list.model';
import { navigationMenuCategories } from '../../mock-data/navigation-menu-categories';
import { MenuService } from '../../services/menu.service';
import { APPLICATION_KEY } from '../../consts/key-configuration.const';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--side-menu',
  templateUrl: './side-menu.container.html',
  styleUrls: ['./side-menu.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SideMenuContainer implements OnInit {
  routes: IMenuModel[];
  categoriesMenu: IMenuListModel[];

  roles: string[];
  unsubscribe$: ReplaySubject<boolean>;

  constructor(private router: Router,
    private authStore: Store<fromAuth.AuthState>,
    private menuService: MenuService) {
    this.routes = [];
    this.categoriesMenu = [];
    this.unsubscribe$ = new ReplaySubject(1);
  }

  ngOnInit() {

    /** TODO : Wiring This with Service HTTP Call */
    this.menuService.getAllGeneralMenu(APPLICATION_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((v) => {
        this.routes = v;
      });
    this.menuService.getAllCategoryGeneralMenu(APPLICATION_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((v) => {
        this.categoriesMenu = v;
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

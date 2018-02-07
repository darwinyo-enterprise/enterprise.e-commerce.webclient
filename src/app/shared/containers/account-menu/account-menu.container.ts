import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IMenuModel } from '../../../shared/models/menu/menu.model';

import { navigationMenuPersonal } from '../../../shared/mock-data/navigation-menu-personal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--account-menu',
  templateUrl: './account-menu.container.html',
  styleUrls: ['./account-menu.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AccountMenuContainer implements OnInit {
  usermenu: IMenuModel[];
  constructor() {
    this.usermenu = [];
  }

  ngOnInit() {
    this.usermenu = navigationMenuPersonal;
  }

}

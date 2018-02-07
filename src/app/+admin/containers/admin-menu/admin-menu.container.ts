import { Component, OnInit } from '@angular/core';
import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { adminNavigationMenu } from '../../../shared/mock-data/admin-navigation-menu';
import { IMenuListModel } from '../../../shared/models/menu/menu-list.model';
import { navigationMenuCategories } from '../../../shared/mock-data/navigation-menu-categories';
import { MenuService } from '../../../shared/services/menu.service';
import { ADMIN_MENU_LAYOUT_KEY } from '../../../shared/consts/key-configuration.const';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin--admin-menu',
  templateUrl: './admin-menu.container.html',
  styleUrls: ['./admin-menu.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AdminMenuContainer implements OnInit {
  /** TODO : Make This Query To Outside World */
  adminMenu: IMenuModel[];
  categoriesMenu: IMenuListModel[];

  constructor(private menuService: MenuService) {
    this.adminMenu = [];
    this.categoriesMenu = [];
  }

  ngOnInit() {

    /** Services Menu By LayoutID */
    this.menuService.getAllLayoutMenu(ADMIN_MENU_LAYOUT_KEY).subscribe((v) => {
      this.adminMenu = v;
    });

    /** Services Category Menu By Layout ID */
    this.menuService.getAllCategoryLayoutMenu(ADMIN_MENU_LAYOUT_KEY).subscribe((v) => {
      this.categoriesMenu = v;
    });
  }

}

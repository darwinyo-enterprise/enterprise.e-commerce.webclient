// import { MenuModel } from './../../../shared/models/menu/menu.model';
// import { userMenuViewModel } from './../../../shared/mock-data/user-menu-view-model';
// import { UserMenuViewModel } from './../../viewmodels/user-menu/user-menu.viewmodel';
// import { MatIconModule } from '@angular/material';
// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { UserMenuComponent } from './user-menu.component';
// import { userMenu } from '../../../shared/mock-data/user-menu';
// import { UserMenuComponentSetup } from '../../testing/setup/components/user-menu-component.setup.spec';

// describe('[CORE] [COMPONENT] USER-MENU-COMPONENT', () => {
//   let component: UserMenuComponent;
//   let fixture: ComponentFixture<UserMenuComponent>;
//   let userMenuModel: UserMenuViewModel;
//   let userMenus: MenuModel[];
//   let userMenuComponentSetup: UserMenuComponentSetup;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserMenuComponent],
//       imports: [MatIconModule]
//     });
//   }));
//   function createComponent() {
//     fixture = TestBed.createComponent(UserMenuComponent);
//     component = fixture.componentInstance;
//     userMenuComponentSetup = new UserMenuComponentSetup(fixture, component);
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       fixture.detectChanges();
//       userMenuComponentSetup.initControls();
//     });
//   }
//   beforeEach(async(() => {
//     createComponent();
//     userMenuModel = userMenuViewModel;
//     userMenus = userMenu;
//   }));
//   afterEach(() => {
//     component = null;
//     fixture = null;
//     userMenuModel = null;
//     userMenus = null;
//     userMenuComponentSetup.cleanControls();
//     userMenuComponentSetup = null;
//   });
//   describe('UI Tests', () => {
//     /** User Menu Test Case :
//      *  - 
//      */
//     it('should display user menu when userMenuViewModel is defined', () => {
//       fixture.detectChanges();
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenuModel.userLogin);
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenuModel.balance.toString());
//     });
//     it('should not display user menu when userMenuViewModel is undefined', () => {
//       fixture.detectChanges();
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenuModel.userLogin);
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenuModel.balance.toString());
//     });
//     it('should populate menu when menu model is defined', () => {
//       component.menuModel = userMenus;
//       fixture.detectChanges();
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenus[0].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenus[1].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenus[2].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenus[3].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).toContain(userMenus[4].menuTitle);
//     });
//     it('should not populate menu when menu model is undefined', () => {
//       fixture.detectChanges();
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenus[0].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenus[1].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenus[2].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenus[3].menuTitle);
//       expect(userMenuComponentSetup.componentEl.innerHTML).not.toContain(userMenus[4].menuTitle);
//     });
//   });
//   describe('Functionality Tests', () => {
//     it('should emit navigateEvent when anchors clicked', () => {
//       component.menuModel = userMenus;
//       fixture.detectChanges();
//       userMenuComponentSetup.initControls();
//       expect(component.navigateEvent.emit).toHaveBeenCalledWith(component.menuModel[0].menuHref);
//     });
//   });
// });

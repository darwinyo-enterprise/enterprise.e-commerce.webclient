import { IMenuModel } from './../models/menu/menu.model';
export const userMenu = [
    <IMenuModel>{
        menuTitle: 'My Profile',
        menuHref: '/my-profile',
        menuIcon: 'person'
    }, <IMenuModel>{
        menuTitle: 'Account settings',
        menuHref: '/account-settings',
        menuIcon: 'tune'
    }, <IMenuModel>{
        menuTitle: 'Log Out',
        menuHref: '/log-out',
        menuIcon: 'exit_to_app'
    }];

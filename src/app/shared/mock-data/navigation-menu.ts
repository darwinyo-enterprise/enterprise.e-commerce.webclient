import { IMenuModel } from './../models/menu/menu.model';
import { AppRoles } from '../consts/app-roles.const';
export const navigationMenu = [
    <IMenuModel>{
        menuTitle: 'Home',
        menuHref: '/home',
        menuIcon: 'home',
        permittedRoles: []
    }, <IMenuModel>{
        menuTitle: 'About Us',
        menuHref: '/about-us',
        menuIcon: 'card_giftcard',
        permittedRoles: []
    }, <IMenuModel>{
        menuTitle: 'Admin Area',
        menuHref: '/admin',
        menuIcon: 'security',
        permittedRoles: [AppRoles.Administrator]
    }];

import { IMenuModel } from '../models/menu/menu.model';

export const adminNavigationMenu = [
    <IMenuModel>{
        menuTitle: 'Home',
        menuHref: '/admin/home',
        menuIcon: 'card_giftcard'
    },
    <IMenuModel>{
        menuTitle: 'Dashboard',
        menuHref: '/admin/dashboard',
        menuIcon: 'card_giftcard'
    }
];

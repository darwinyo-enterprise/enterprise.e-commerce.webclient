import { IMenuModel } from './../models/menu/menu.model';
export const navigationMenuPersonal = [
    <IMenuModel>{
        menuTitle: 'My Profile',
        menuHref: '/my-profile',
        menuIcon: 'person'
    }, <IMenuModel>{
        menuTitle: 'Balance',
        menuHref: '/balance',
        menuIcon: 'account_balance_wallet'
    }, <IMenuModel>{
        menuTitle: 'Wishlist',
        menuHref: '/wishlist',
        menuIcon: 'shopping_basket'
    }, <IMenuModel>{
        menuTitle: 'Message',
        menuHref: '/message',
        menuIcon: 'email',
        menuNotification: 3
    }, <IMenuModel>{
        menuTitle: 'Product Reviews',
        menuHref: '/product-reviews',
        menuIcon: 'comment',
        menuNotification: 3
    }, <IMenuModel>{
        menuTitle: 'Favorite Vendors',
        menuHref: '/favorite-vendors',
        menuIcon: 'store'
    }, <IMenuModel>{
        menuTitle: 'Purchase History',
        menuHref: '/purchase-history',
        menuIcon: 'history'
    }, <IMenuModel>{
        menuTitle: 'Account settings',
        menuHref: '/account-settings',
        menuIcon: 'tune'
    }, <IMenuModel>{
        menuTitle: 'Log Out',
        menuHref: '/log-out',
        menuIcon: 'exit_to_app'
    }];

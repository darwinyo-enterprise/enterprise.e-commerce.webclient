import { IMenuModel } from '../../models/menu/menu.model';
import { AppRoles } from '../../consts/app-roles.const';

/** Menu Order can effect unit tests, dont manipulate this const */
export const navigationMenuTesting = [
    <IMenuModel>{
        menuTitle: 'public area',
        menuHref: 'public-area',
        menuIcon: 'public',
        permittedRoles: []
    }, <IMenuModel>{
        menuTitle: 'message',
        menuHref: 'message',
        menuIcon: 'message',
        permittedRoles: [],
        menuNotification: 10
    }, <IMenuModel>{
        menuTitle: 'security-admin area',
        menuHref: 'security-admin-area',
        menuIcon: 'security-admin',
        permittedRoles: [AppRoles.Security_Administrator]
    }, <IMenuModel>{
        menuTitle: 'content-admin area',
        menuHref: 'content-admin-area',
        menuIcon: 'content-admin',
        permittedRoles: [AppRoles.Content_Administrator]
    }, <IMenuModel>{
        menuTitle: 'super-admin area',
        menuHref: 'super-admin-area',
        menuIcon: 'super-admin',
        permittedRoles: [AppRoles.Super_Administrator]
    }, <IMenuModel>{
        menuTitle: 'admin area',
        menuHref: 'admin-area',
        menuIcon: 'admin',
        permittedRoles: [AppRoles.Administrator]
    }];

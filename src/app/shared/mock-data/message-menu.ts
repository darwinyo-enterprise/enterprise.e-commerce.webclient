import { IMenuModel } from './../models/menu/menu.model';
export const messageMenu = [
    <IMenuModel>{
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
        menuTitle: 'Customer Service',
        menuHref: '/customer-service',
        menuIcon: 'room_service'
    }];

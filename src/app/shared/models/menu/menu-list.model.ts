import { IMenuModel } from './menu.model';
export interface IMenuListModel {
    menuCategory: string;
    menuChild: IMenuModel[];
    permittedRoles: string[];
}

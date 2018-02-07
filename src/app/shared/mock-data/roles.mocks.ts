import { AppRoles } from '../consts/app-roles.const';

export const EndUserOnly = [AppRoles.End_User];

export const SuperAdmin = [AppRoles.Administrator, AppRoles.Super_Administrator];

export const SecurityAdmin = [AppRoles.Administrator, AppRoles.Security_Administrator];

export const ContentAdmin = [AppRoles.Administrator, AppRoles.Content_Administrator];

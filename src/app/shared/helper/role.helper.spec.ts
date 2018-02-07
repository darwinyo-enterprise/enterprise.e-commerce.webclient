import { RoleHelper } from "./role.helper";
import { AppRoles } from "../consts/app-roles.const";

describe('[SHARED] [HELPER] ROLE-HELPER', () => {

    /** Test Cases :
     *  - IsInRole :
     *      - if Defined role has defined in Roles array then return true.
     *  - HasPermissionRole :
     *      - If one of Permission Role has defined in User Role then return true
     *      - Once Return True break the loop.
     */
    describe('IsInRole', () => {
        it('should return true if Defined role has defined in roles array', () => {
            const expected = RoleHelper.IsInRole(AppRoles.Administrator, [AppRoles.Administrator, AppRoles.Super_Administrator]);

            expect(expected).toBeTruthy();
        });
        it('should return false if Defined role not defined in roles array', () => {
            const expected = RoleHelper.IsInRole(AppRoles.End_User, [AppRoles.Administrator, AppRoles.Super_Administrator]);

            expect(expected).toBeFalsy();
        });
    });

    describe('HasPermissionRole', () => {
        it('should return true if one of permitted role has defined in user roles array', () => {
            const userRole = [AppRoles.Administrator, AppRoles.Security_Administrator];
            const permittedRole = [AppRoles.Administrator, AppRoles.Super_Administrator];

            const expected = RoleHelper.HasPermissionRole(userRole, permittedRole);

            expect(expected).toBeTruthy();
        });
        it('should return false if one of permitted role not defined in user roles array', () => {
            const userRole = [AppRoles.End_User];
            const permittedRole = [AppRoles.Administrator, AppRoles.Super_Administrator];

            const expected = RoleHelper.HasPermissionRole(userRole, permittedRole);

            expect(expected).toBeFalsy();
        });
        it('should return true if permitted role is empty', () => {
            const userRole = [AppRoles.End_User];
            const permittedRole = [];

            const expected = RoleHelper.HasPermissionRole(userRole, permittedRole);

            expect(expected).toBeTruthy();
        });
        it('should return true if user role is SuperAdministrator', () => {
            const userRole = [AppRoles.Super_Administrator];
            const permittedRole = [AppRoles.Administrator];

            const expected = RoleHelper.HasPermissionRole(userRole, permittedRole);

            expect(expected).toBeTruthy();
        });
        it('should not throw error Even none of then Specified', () => {
            const expected = RoleHelper.HasPermissionRole(null, null);

            expect(expected).toBeTruthy();
        })
    });

});

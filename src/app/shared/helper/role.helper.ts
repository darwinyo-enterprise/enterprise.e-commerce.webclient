import { AppRoles } from '../consts/app-roles.const';

/** Role Helper */
export class RoleHelper {
    /** Used For getting Specific Role In Roles Arrays
     *  Examples :
     *  - Finding Admin Role.
     *  - Finding End User Role.
    */
    static IsInRole(role: string, roles: string[]): boolean {
        return roles.find((x) => x === role) !== undefined;
    }
    /** Used For get Filtering Is User Has Privilage To Access */
    static HasPermissionRole(userRoles: string[], permittedRoles: string[]): boolean {
        /** Check if user role empty, Means Anonymous,
         *  Avoid Error
         */
        if (userRoles === null) {
            userRoles = [];
        }

        /** Make Sure Every Undefined Role In Menu Are Initialized,
         *  Avoid Error
         */
        if (permittedRoles === null) {
            permittedRoles = [];
        }

        /** Show to Everybody */
        if (permittedRoles.length === 0) {
            return true;
        }

        /** Has Role Super Administrator */
        if (userRoles.find(x => x === AppRoles.Super_Administrator) !== undefined) {
            return true;
        }

        /** Identify Current User Is has Permission */
        let hasPermission = false;

        /** For Loop for every roles defined in permitted role defined in user role */
        permittedRoles.every((v) => {

            /** Check If User Role Has Specified Role Then Return True */
            if (userRoles.find(y => y === v) !== undefined) {
                hasPermission = true;
            }

            /** Break After This True */
            return hasPermission;
        });
        return hasPermission;
    }
}

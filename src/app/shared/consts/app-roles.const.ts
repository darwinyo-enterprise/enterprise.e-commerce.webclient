/** TODO : Adding This Also Refer To Backend, Sync The Fields */
/** TODO : Change Value Of Below Roles with application name */
/** Roles Will Begin With Application Name Such as E-Commerce.Super Administrator / Configuration.Administrator */
export enum AppRoles {
    /**Privilages :
     * This Role has the Highest Privilages.
     * Has All Permissions.
     */
    Super_Administrator = 'Super Administrator',

    /**Privilages :
     * This Role has only managing security Concern Privilages.
     * Managing SQL Connection, Changing Apps SSL,
     * Certificates Settings.
     */
    Security_Administrator = 'Security Administrator',

    /**Privilages :
     * This Role has only managing Content Concern Privilages.
     * Managing Product, Event,Etc.
     */
    Content_Administrator = 'Content Administrator',

    /**Privilages :
     * This Role Only Give User Access To Admin Area.
     * All Above Admins will Get This Role too.
     * If Not Given this Role They Couldn't even open Admin Module. */
    Administrator = 'Administrator',

    /**Privilages :
     * Most Least Privilages Role.
     */
    End_User = 'End User'
}

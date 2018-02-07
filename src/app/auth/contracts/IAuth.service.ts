export interface IAuthService {
    //#region Extensions
    /** Verifies user, return true if user not null, and not session not expired */
    isLoggedIn(): boolean;

    /** Get Logged User claims. */
    getClaims(): any;

    /** Oidc related Session Clear */
    clearOidcSession(): void;

    /** this used for api header, where api need authorization header */
    getAuthorizationHeaderValue(): string;

    /** Used for redirect user to RP for registration. */
    registrationRedirect(): void;
    //#endregion

    //#region Sign-In Functions

    /** Sign-in by redirect user directly to RP */
    signInRedirect(): Promise<void>;

    /** Sign-in by pop up new window */
    signInPopUp(): Promise<void>;

    /** This will triggered by system, if config automaticSilentRenew set to true */
    signInSilent(): Promise<void>;

    /** Call-back after authentication done, this can be return nothing if user failed to get access.
     *  if User Complete The Authentication well, this will assign user,
     *  accessing user => by call this service property.
    */
    completeRedirectAuthentication(): Promise<void>;

    /** Callback after user login silently...
     *  Set User State after this Success...
     */
    completeSilentAuthentication(): Promise<void>;

    /** Callback After Pop-Up Login...
     *  Success Will trigger Auth State To Store...
     */
    completePopUpAuthentication(): Promise<void>;
    //#endregion

    //#region Sign-Out Functions
    /** Attempt To log-out by pop-up new window, user to RP,
     *  though user not logged out till RP logged out...
     *  Triggered By Auth Effects.
     */
    startLogoutPopUp(): Promise<void>;

    /** Callback pop-up log-out can be failed.
     *  depends on RP though...
     */
    completeLogoutPopUp(): Promise<void>;

    /** Attempt To log-out by redirect user to RP,
     *  though user not logged out till RP logged out
     *  Triggered By Auth Effects.
     */
    startLogoutRedirect(): Promise<void>;

    /** Callback redirect log-out can be failed.
     *  depends on RP though...
     */
    completeLogoutRedirect(): Promise<void>;

    //#endregion

    //#region Access Token
    /** Revoke Expiring Access Token. */
    revoke(): Promise<void>;
    //#endregion

    //#region Etc
    /** used in constructor only, this used for initiate events that triggered when condition fullfiled. */
    setAuthenticationEvents(): void;
    //#endregion
}

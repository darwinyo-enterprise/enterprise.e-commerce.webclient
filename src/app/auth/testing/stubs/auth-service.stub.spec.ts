import { AuthService } from '../../services/auth/auth.service';
import { User } from 'oidc-client';

export class AuthServiceStub extends AuthService {
    isLoggedIn(): boolean {
        if (this.user != null) {
            return true;
        }
        return false;
    }

    /** Used for redirect user to RP for registration. */
    registrationRedirect() {
        return null;
    }

    //#region Etc
    /** used in constructor only, this used for initiate events that triggered when condition fullfiled. */
    setAuthenticationEvents() {
        return null;
    }
    //#endregion

}

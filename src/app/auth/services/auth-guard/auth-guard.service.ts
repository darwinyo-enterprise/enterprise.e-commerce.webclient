import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CanActivateChild } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';


/** Used for Authenticate user before landing to other pages or module. */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService) { }

    /** Will Used For Authorize User If User Hasn't Authenticate */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Change this if want to change authentication method.
        this.authService.signInRedirect();
        return false;
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
}

import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { CanActivateChild, CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleHelper } from '../../../shared/helper/role.helper';
import { AppRoles } from '../../../shared/consts/app-roles.const';
import { Store } from '@ngrx/store';

import * as fromAuth from './../../reducers/auth-state.reducer';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminGuardService implements CanActivateChild, CanActivate {


  /** Indicate Is Current User Role Is admin. */
  isAdmin: boolean;

  constructor(private authService: AuthService) {
    this.authService.isAdmin().subscribe(res => {
      this.isAdmin = res;
    });
  }
  /** Can User Access The Admin Area */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // if (!this.isAdmin) {
    //   this.authService.redirectToNotAuthorizedPage();
    // }
    // return this.isAdmin;
    return true;
  }

  /** Used For Access Admin Areas Childs */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

// import * as fromCore from './../../reducers/core-state.reducer';
import * as fromAuth from './../../../auth/reducers/auth-state.reducer';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'core--core-layout',
  templateUrl: './core.layout.html',
  styleUrls: ['./core.layout.scss']
})
// tslint:disable-next-line:component-class-suffix
export class CoreLayout implements OnInit, OnDestroy {
  //#region Models
  usermenu: IMenuModel[];
  //#endregion

  /** Observables */
  unsubscribe$: ReplaySubject<boolean>;


  /** Used for Side navbar Info */
  userName: string;
  userEmail: string;
  userRoles: string[];

  /** Sidebar Menu Title Name And Title Navbar */
  appTitle: string;


  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private authStore: Store<fromAuth.AuthState>) {

    this.unsubscribe$ = new ReplaySubject(1);

    /** TODO : Will be Changed In Production */
    this.appTitle = 'Enterprise';
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
  }
  /** Unsubscribe To Avoid Memory Dump */
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  ngOnInit() {

    /** Select to populate User Info.
     *  If Not Exists Just return Anonymous.
     */
    this.authStore.select('userState').pipe(
      // Unsubscribe
      takeUntil(this.unsubscribe$))
      .subscribe(state => {
        this.userEmail = state === undefined ? 'anonymous@company.com' : state.userEmail;
        this.userName = state === undefined ? 'anonymous' : state.userLogin;
        this.userRoles = state === undefined ? [] : state.userRole;
      });
  }

}

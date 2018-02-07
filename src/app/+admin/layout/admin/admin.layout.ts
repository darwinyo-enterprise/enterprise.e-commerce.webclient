import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { MatIconRegistry, MatDialog } from '@angular/material';
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent, TdRotateAnimation } from '@covalent/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { IMenuModel } from '../../../shared/models/menu/menu.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromAuth from './../../../auth/reducers/auth-state.reducer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin--admin-layout',
  templateUrl: './admin.layout.html',
  styleUrls: ['./admin.layout.scss'],
  animations: [
    TdRotateAnimation(),
  ],
})
// tslint:disable-next-line:component-class-suffix
export class AdminLayout implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;
  /** Observables */
  unsubscribe$: ReplaySubject<boolean>;

  /** Used for Side navbar Info */
  userName: string;
  userEmail: string;
  userRoles: string[];

  /** App Title Effect Top Toolbar */
  appTitle: string;

  miniNav = false;
  // Timeframe
  dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
  dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));

  // Dialog
  config = {
    width: '50%',
    height: '50%',
  };

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  constructor(public media: TdMediaService,
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private authStore: Store<fromAuth.AuthState>) {

    this.unsubscribe$ = new ReplaySubject(1);

    /** TODO : Changes This In Production */
    this.appTitle = 'UI Platform';
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
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  openTemplate() {
    this.dialog.open(this.template, this.config);
  }
}

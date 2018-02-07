import * as fromCore from './core/reducers/core-state.reducer';

import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';

import { PromptModel } from './core/models/dialogs/prompt.model';
import { AlertModel } from './core/models/dialogs/alert.model';
import { ConfirmModel } from './core/models/dialogs/confirm.model';

import { TdDialogService, IAlertConfig, IConfirmConfig, IPromptConfig } from '@covalent/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { filter } from 'rxjs/operators/filter';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { IMenuModel } from './shared/models/menu/menu.model';

import { navigationMenuPersonal } from './shared/mock-data/navigation-menu-personal';
import { navigationMenu } from './shared/mock-data/navigation-menu';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  /** Actions */
  error$: Observable<AlertModel | null>;
  alert$: Observable<AlertModel | null>;
  prompt$: Observable<PromptModel | null>;
  confirm$: Observable<ConfirmModel | null>;

  //#endregion

  unsubscribe$: ReplaySubject<boolean>;

  constructor(
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef,
    private coreStore: Store<fromCore.CoreState>,
    private route: Router) {
    /** Actions */
    this.error$ = this.coreStore.select(fromCore.getError);
    this.alert$ = this.coreStore.select(fromCore.getAlert);
    this.confirm$ = this.coreStore.select(fromCore.getConfirm);
    this.prompt$ = this.coreStore.select(fromCore.getPrompt);
    this.unsubscribe$ = new ReplaySubject(1);
  }
  ngOnInit(): void {
    this.error$
      .pipe(
      filter((alertModel) => alertModel !== null),
      takeUntil(this.unsubscribe$))
      .subscribe((alertModel: AlertModel) => {
        this.onAlert(alertModel);
      });
    this.alert$
      .pipe(
      filter((alertModel: AlertModel) => alertModel !== null),
      takeUntil(this.unsubscribe$))
      .subscribe((alertModel: AlertModel) => {
        this.onAlert(alertModel);
      });
    this.confirm$
      .pipe(
      filter((confirmModel: ConfirmModel) => confirmModel !== null),
      takeUntil(this.unsubscribe$))
      .subscribe((confirmModel: ConfirmModel) => {
        this.onConfirm(confirmModel);
      });
    this.prompt$
      .pipe(
      filter((promptModel: PromptModel) => promptModel !== null),
      takeUntil(this.unsubscribe$))
      .subscribe((promptModel: PromptModel) => {
        this.onConfirm(promptModel);
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  onAlert(alertModel: AlertModel) {
    this._dialogService.openAlert(<IAlertConfig>{
      closeButton: alertModel.closeButton,
      message: alertModel.message,
      title: alertModel.title,
      viewContainerRef: this._viewContainerRef
    });
  }
  onConfirm(confirmModel: ConfirmModel) {
    this._dialogService.openConfirm(<IConfirmConfig>{
      cancelButton: confirmModel.cancelButton,
      acceptButton: confirmModel.acceptButton,
      message: confirmModel.message,
      title: confirmModel.title,
      viewContainerRef: this._viewContainerRef
    });
  }
  onPrompt(promptModel: PromptModel) {
    this._dialogService.openPrompt(<IPromptConfig>{
      cancelButton: promptModel.cancelButton,
      acceptButton: promptModel.acceptButton,
      message: promptModel.message,
      title: promptModel.title,
      viewContainerRef: this._viewContainerRef
    });
  }
}

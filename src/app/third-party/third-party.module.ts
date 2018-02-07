import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region Covalent
import {
  CovalentLayoutModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentCommonModule,
  CovalentMediaModule,
  CovalentExpansionPanelModule,
  CovalentStepsModule,
  CovalentDialogsModule,
  CovalentLoadingModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentDataTableModule,
  CovalentMessageModule
} from '@covalent/core';
//#endregion

//#region Material
import {
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatRippleModule,
  MatRadioModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule, MatSliderModule
} from '@angular/material';
//#endregion

//#region Dev Extreme
import {
  DxCheckBoxModule,
  DxGalleryModule,
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule
} from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    //#region Covalent
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    //#endregion

    //#region Material Modules
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    //#endregion

    //#region Dev Extreme
    DxCheckBoxModule,
    DxGalleryModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    //#endregion

  ],
  declarations: [],
  exports: [
    RouterModule,

    //#region Covalent
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    //#endregion

    //#region Material Modules
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    //#endregion

    //#region Dev Extreme
    DxCheckBoxModule,
    DxGalleryModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    //#endregion

  ]
})
export class ThirdPartyModule { }

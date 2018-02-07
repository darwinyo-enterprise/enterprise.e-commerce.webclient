import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { metaReducers, routerReducers } from './reducers/app-state.reducer';

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

//#region Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterStateSerializer } from './shared/utils';
//#endregion

import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRouteModule } from './routes/app-route.module';
import { ErrorNotFoundPage } from './pages/error-not-found/error-not-found.page';
import { ManufacturerManagementModule } from './e-commerce area/+manufacturer-management/manufacturer-management.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorNotFoundPage
  ],
  imports: [
    // Pre-rendering Setting
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // Server Workers
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    JsonpModule,

    //#region Ngrx Suites
    StoreModule.forRoot(routerReducers, { metaReducers }),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    //#endregion

    //#region REMOVE AFTER DONE
    ManufacturerManagementModule,
    //#endregion
    
    CoreModule,
    AppRouteModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

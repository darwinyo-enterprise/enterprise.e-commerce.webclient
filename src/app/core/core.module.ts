import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { coreStateReducer } from './reducers/core-state.reducer';
import { CoreRouteModule } from './routes/core-route.module';
import { RouterModule } from '@angular/router';
import { CoreEffects } from './effects/core.effects';

import { AuthModule } from '../auth/auth.module';

import { SubMenuContainer } from './containers/sub-menu/sub-menu.container';
import { HomePage } from './pages/home/home.page';

import { CoreLayout } from './layout/core/core.layout';
import { SharedModule } from '../shared/shared.module';
import { AboutUsPage } from './pages/about-us/about-us.page';

@NgModule({
  imports: [
    CommonModule,

    // Order Important.... (Cause RouterModules)
    // Put Other Module Above AuthModule...
    AuthModule,
    SharedModule,
    CoreRouteModule,

    //#region ngrx
    StoreModule.forFeature('core', coreStateReducer),
    EffectsModule.forFeature([CoreEffects]),
    //#endregion
  ],
  declarations: [FooterComponent,
    SubMenuContainer,

    HomePage,

    CoreLayout,

    AboutUsPage],
  exports: [
    FooterComponent,

    SubMenuContainer,

    HomePage,

    CoreLayout]
})
export class CoreModule { }

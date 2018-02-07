import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCallbackPage } from './auth-callback.page';
import { AuthService } from '../../services/auth/auth.service';
import { AuthServiceStub } from '../../testing/stubs/auth-service.stub.spec';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import * as fromShared from './../../../shared/reducers/shared-state.reducer';

xdescribe('[AUTH] [PAGE] AUTH-CALLBACK-PAGE', () => {
  let component: AuthCallbackPage;
  let fixture: ComponentFixture<AuthCallbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthCallbackPage],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.routerReducers,
          auth: combineReducers(fromAuth.authStateReducer),
          core: combineReducers(fromCore.coreStateReducer),
          shared: combineReducers(fromShared.sharedStateReducer)
        })
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCallbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

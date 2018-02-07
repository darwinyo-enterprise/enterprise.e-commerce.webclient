import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentPage } from './silent.page';
import { AuthService } from '../../services/auth/auth.service';
import { AuthServiceStub } from '../../testing/stubs/auth-service.stub.spec';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import * as fromShared from './../../../shared/reducers/shared-state.reducer';

xdescribe('[AUTH] [PAGE] SILENT-PAGE', () => {
  let component: SilentPage;
  let fixture: ComponentFixture<SilentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SilentPage],
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
    fixture = TestBed.createComponent(SilentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

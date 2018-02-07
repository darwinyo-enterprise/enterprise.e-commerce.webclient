import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavbarButtonsContainer } from './admin-navbar-buttons.container';

describe('AdminNavbarButtonsComponent', () => {
  let component: AdminNavbarButtonsContainer;
  let fixture: ComponentFixture<AdminNavbarButtonsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavbarButtonsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavbarButtonsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtonsContainer } from './navbar-buttons.container';

describe('NavbarButtonsComponent', () => {
  let component: NavbarButtonsContainer;
  let fixture: ComponentFixture<NavbarButtonsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarButtonsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarButtonsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

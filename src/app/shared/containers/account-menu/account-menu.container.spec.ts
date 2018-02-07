import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMenuContainer } from './account-menu.container';

describe('AccountMenuComponent', () => {
  let component: AccountMenuContainer;
  let fixture: ComponentFixture<AccountMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMenuContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMenuContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizedPage } from './not-authorized.page';

xdescribe('[AUTH] [PAGE] NOT-AUTHORIZED-PAGE', () => {
  let component: NotAuthorizedPage;
  let fixture: ComponentFixture<NotAuthorizedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAuthorizedPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

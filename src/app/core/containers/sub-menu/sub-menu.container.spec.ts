import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuContainer } from './sub-menu.container';

describe('SubMenuComponent', () => {
  let component: SubMenuContainer;
  let fixture: ComponentFixture<SubMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

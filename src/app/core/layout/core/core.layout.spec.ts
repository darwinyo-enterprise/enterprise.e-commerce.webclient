import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLayout } from './core.layout';

describe('CoreComponent', () => {
  let component: CoreLayout;
  let fixture: ComponentFixture<CoreLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

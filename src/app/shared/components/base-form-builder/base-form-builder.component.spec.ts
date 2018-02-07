import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormBuilderComponent } from './base-form-builder.component';

describe('BaseFormBuilderComponent', () => {
  let component: BaseFormBuilderComponent;
  let fixture: ComponentFixture<BaseFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

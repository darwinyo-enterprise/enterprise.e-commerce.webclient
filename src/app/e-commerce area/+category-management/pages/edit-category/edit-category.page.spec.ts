import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryPage } from './edit-category.component';

describe('EditCategoryComponent', () => {
  let component: EditCategoryPage;
  let fixture: ComponentFixture<EditCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

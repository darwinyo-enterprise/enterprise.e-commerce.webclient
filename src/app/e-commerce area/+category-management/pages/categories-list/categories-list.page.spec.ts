import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListPage } from './categories-list.component';

describe('CategoriesListComponent', () => {
  let component: CategoriesListPage;
  let fixture: ComponentFixture<CategoriesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

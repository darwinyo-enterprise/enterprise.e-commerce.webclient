import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductSpecificationComponent } from './list-product-specification.component';

describe('ListProductSpecificationComponent', () => {
  let component: ListProductSpecificationComponent;
  let fixture: ComponentFixture<ListProductSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

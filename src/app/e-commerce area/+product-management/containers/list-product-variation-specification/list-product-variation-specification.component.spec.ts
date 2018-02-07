import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductVariationSpecificationComponent } from './list-product-variation-specification.component';

describe('ListProductVariationSpecificationComponent', () => {
  let component: ListProductVariationSpecificationComponent;
  let fixture: ComponentFixture<ListProductVariationSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductVariationSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductVariationSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductVariationComponent } from './edit-product-variation.component';

describe('EditProductVariationComponent', () => {
  let component: EditProductVariationComponent;
  let fixture: ComponentFixture<EditProductVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

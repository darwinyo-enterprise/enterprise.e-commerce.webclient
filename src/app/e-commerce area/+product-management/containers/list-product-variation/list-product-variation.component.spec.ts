import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductVariationComponent } from './list-product-variation.component';

describe('ListProductVariationComponent', () => {
  let component: ListProductVariationComponent;
  let fixture: ComponentFixture<ListProductVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

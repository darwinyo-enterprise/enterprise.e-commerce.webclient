import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPage } from './about-us.page';

describe('AboutUsComponent', () => {
  let component: AboutUsPage;
  let fixture: ComponentFixture<AboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

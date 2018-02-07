import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContainer } from './info.container';

describe('InfoComponent', () => {
  let component: InfoContainer;
  let fixture: ComponentFixture<InfoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

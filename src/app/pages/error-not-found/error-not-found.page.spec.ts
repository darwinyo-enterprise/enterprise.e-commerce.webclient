/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErrorNotFoundPage } from './error-not-found.page';

describe('[CORE] [PAGE] ERROR-NOT-FOUND-PAGE', () => {
  let component: ErrorNotFoundPage;
  let fixture: ComponentFixture<ErrorNotFoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorNotFoundPage]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });
});

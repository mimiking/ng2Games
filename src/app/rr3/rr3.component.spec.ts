/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rr3Component } from './rr3.component';

describe('Rr3Component', () => {
  let component: Rr3Component;
  let fixture: ComponentFixture<Rr3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rr3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

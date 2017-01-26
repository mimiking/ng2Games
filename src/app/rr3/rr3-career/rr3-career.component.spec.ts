/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rr3CareerComponent } from './rr3-career.component';

describe('Rr3CareerComponent', () => {
  let component: Rr3CareerComponent;
  let fixture: ComponentFixture<Rr3CareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rr3CareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rr3CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rr3SearchByComponent } from './rr3-search-by.component';

describe('Rr3SearchByComponent', () => {
  let component: Rr3SearchByComponent;
  let fixture: ComponentFixture<Rr3SearchByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rr3SearchByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rr3SearchByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

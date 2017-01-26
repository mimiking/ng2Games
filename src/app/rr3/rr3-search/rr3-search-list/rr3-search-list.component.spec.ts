/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rr3SearchListComponent } from './rr3-search-list.component';

describe('Rr3SearchListComponent', () => {
  let component: Rr3SearchListComponent;
  let fixture: ComponentFixture<Rr3SearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rr3SearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rr3SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

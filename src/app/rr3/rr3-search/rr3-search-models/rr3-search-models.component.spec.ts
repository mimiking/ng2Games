/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rr3SearchModelsComponent } from './rr3-search-models.component';

describe('Rr3SearchModelsComponent', () => {
  let component: Rr3SearchModelsComponent;
  let fixture: ComponentFixture<Rr3SearchModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rr3SearchModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rr3SearchModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rr3RoutingModule } from './rr3-routing.module';
import { Rr3CareerModule } from './rr3-career/rr3-career.module';
import { Rr3Component } from './rr3.component';
import { Rr3CareerComponent } from './rr3-career/rr3-career.component';

@NgModule({
  imports: [
    CommonModule,
    Rr3RoutingModule,
    Rr3CareerModule
  ],
  declarations: [Rr3Component, Rr3CareerComponent]
})
export class Rr3Module { }

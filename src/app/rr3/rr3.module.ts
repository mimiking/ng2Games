import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rr3RoutingModule } from './rr3-routing.module';
import { Rr3CareerModule } from './rr3-career/rr3-career.module';
import { Rr3UpgradeModule } from './rr3-upgrade/rr3-upgrade.module';
import { Rr3SearchModule } from './rr3-search/rr3-search.module';
import { Rr3Component } from './rr3.component';

@NgModule({
  imports: [
    CommonModule,
    Rr3RoutingModule,
    Rr3CareerModule,
    Rr3UpgradeModule,
    Rr3SearchModule
  ],
  declarations: [
    Rr3Component
  ]
})
export class Rr3Module { }

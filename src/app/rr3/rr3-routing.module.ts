import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rr3Component } from './rr3.component';
import { Rr3CareerComponent } from './rr3-career/rr3-career.component';

const routes: Routes = [{
    path: '', component: Rr3Component,
    children: [
      { path: 'career', component:  Rr3CareerComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Rr3RoutingModule { }

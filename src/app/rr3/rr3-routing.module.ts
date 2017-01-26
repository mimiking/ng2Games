import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rr3Component } from './rr3.component';
import { Rr3CareerComponent } from './rr3-career/rr3-career.component';
import { Rr3UpgradeComponent } from './rr3-upgrade/rr3-upgrade.component';
import { Rr3SearchComponent } from './rr3-search/rr3-search.component';

const routes: Routes = [{
    path: '', component: Rr3Component,
    children: [
      { path: 'career', component:  Rr3CareerComponent },
      { path: 'upgrade', component:  Rr3UpgradeComponent },
      { path: 'search', component:  Rr3SearchComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Rr3RoutingModule { }

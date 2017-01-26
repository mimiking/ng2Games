import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '', component: PageNotFoundComponent},
  {
    path: 'rr3',
    loadChildren: './rr3/rr3.module#Rr3Module'
  },
  { path: '**', component: PageNotFoundComponent }

/*
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'i-moto-auc', loadChildren: './i-moto-auc/i-moto-auc.module#IMotoAucModule' },
  { path: '**', component: PageNotFoundComponent }
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

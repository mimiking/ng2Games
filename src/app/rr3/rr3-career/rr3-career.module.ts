import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModule } from '../../shared/modules/test/test.module';
import { Rr3CareerComponent } from './rr3-career.component';

@NgModule({
  imports: [
    CommonModule,
    TestModule
  ],
  declarations: [
    Rr3CareerComponent
  ],
  exports: [
    Rr3CareerComponent
  ]
})
export class Rr3CareerModule { }

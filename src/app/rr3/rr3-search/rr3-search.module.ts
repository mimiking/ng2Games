import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailModule } from '../../shared/modules/thumbnail/thumbnail.module';
import { TabsModule } from '../../shared/modules/tabs/tabs.module';
import { Rr3CareerModule } from '../rr3-career/rr3-career.module';

import { BaseService } from '../../shared/services/base.service';
import { Rr3SearchService } from './services/rr3-search.service';
import { Rr3SearchMockService } from './services/rr3-search-mock.service';

import { Rr3SearchComponent } from './rr3-search.component';
import { Rr3SearchByComponent } from './rr3-search-by/rr3-search-by.component';
import { Rr3SearchModelsComponent } from './rr3-search-models/rr3-search-models.component';
import { Rr3SearchListComponent } from './rr3-search-list/rr3-search-list.component';


@NgModule({
  imports: [
    CommonModule,
    ThumbnailModule,
    TabsModule,
    Rr3CareerModule
  ],
  declarations: [
    Rr3SearchComponent,
    Rr3SearchByComponent,
    Rr3SearchModelsComponent,
    Rr3SearchListComponent
  ],
  providers: [
    BaseService,
    { provide: Rr3SearchService, useClass: Rr3SearchMockService}
  ]
})
export class Rr3SearchModule { }

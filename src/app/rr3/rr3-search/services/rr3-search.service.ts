import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class Rr3SearchService extends BaseService {

  //constructor() { }
  public doSearchBySearch(params: any, success: any, failure: any) {
    const url = '/api/v1/search';
    super.doGet(url, success, failure);
  }

}

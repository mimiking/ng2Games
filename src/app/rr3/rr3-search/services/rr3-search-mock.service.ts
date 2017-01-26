import { Injectable } from '@angular/core';
import { Rr3SearchService } from './rr3-search.service';

@Injectable()
export class Rr3SearchMockService extends Rr3SearchService {

  //constructor() { }
  public doSearchBySearch(params: any, success: any, failure: any) {
    //const url = '/api/v1/search';
    const searchBy = params.searchBy;
    const url = `./app/rr3/_rr3_dat/mst/${searchBy}.json`;
    super.doGet(url, success, failure);
  }

}

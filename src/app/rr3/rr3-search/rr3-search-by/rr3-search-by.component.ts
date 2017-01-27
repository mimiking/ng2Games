import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Rr3SearchService } from '../services/rr3-search.service';

@Component({
  selector: 'app-rr3-search-by',
  templateUrl: './rr3-search-by.component.html',
  styleUrls: ['./rr3-search-by.component.css']
})
export class Rr3SearchByComponent implements OnInit, OnChanges {

/*
  ways: Array<any> = [{
    code: '01',
    name: 'By Career',
    selected: true,
    styleClass: 'cl cl-left'
  }, {
    code: '02',
    name: 'By Manufacturer',
    selected: false,
    styleClass: 'cl cl-right'
  }];
  */

  @Input('way')
  way: any;

  groupName: string;
  group: any;

  constructor(private service: Rr3SearchService) { }

  ngOnInit() {
    //this.setCM(this.way);
  }

  ngOnChanges() {
    this.setCM(this.way);
  }

/*
  doSelectL(params: any) {
    console.debug(`code = ${params.code}, name = ${params.name}`);
    this.ways.forEach(way => {
      way.selected = way.code === params.code;
    });
    this.selectL(params.code, params.name);
  }
  */

  doSelectM(params: any) {
    console.debug(`code = ${params.code}, name = ${params.name}`);
  }

  private setCM(params: any) {
    const code = params.code;
    const success = (result) => {
      this.group = result;
    };

    const kbnName = code === '01' ? 'career' : 'maker';

    this.groupName = params.name;
    this.service.doSearchBySearch({searchBy: kbnName}, success, ()=>{});
  }
}

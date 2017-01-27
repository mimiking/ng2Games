import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr3-search',
  templateUrl: './rr3-search.component.html',
  styleUrls: ['./rr3-search.component.css']
})
export class Rr3SearchComponent implements OnInit {

  tabs: Array<any> = [{
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

  selectedTab: any = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

  doTabSelect(params: any) {
    console.debug(`code = ${params.code}, name = ${params.name}`);
    this.tabs.forEach(tab => {
      if (tab.code === params.code) {
        tab.selected = true;
        this.selectedTab = tab;
      } else {
        tab.selected = false;
      }
    });
  }

}

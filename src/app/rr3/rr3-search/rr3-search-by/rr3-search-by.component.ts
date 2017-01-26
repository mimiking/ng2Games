import { Component, OnInit } from '@angular/core';

import { Rr3SearchService } from '../services/rr3-search.service';

@Component({
  selector: 'app-rr3-search-by',
  templateUrl: './rr3-search-by.component.html',
  styleUrls: ['./rr3-search-by.component.css']
})
export class Rr3SearchByComponent implements OnInit {

  groupNamae: string;
  group: any;

  constructor(private service: Rr3SearchService) { }

  ngOnInit() {
    const success = (result) => {
      this.group = result;
    };

    this.groupNamae = 'Maker';
    this.service.doSearchBySearch({searchBy: 'maker'}, success, ()=>{});
  }

}

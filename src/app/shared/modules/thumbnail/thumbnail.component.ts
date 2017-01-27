import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input('styleClass')
  styleClass: string;

  @Input('thumb')
  thumb: any;

  @Output('onSelect')
  onSelect: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit() {
  }

  doThumbClick(thumb: any) {
    this.onSelect.emit(thumb);
  }

}

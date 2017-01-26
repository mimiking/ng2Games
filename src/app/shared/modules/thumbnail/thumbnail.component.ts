import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input('styleClass')
  styleClass: string;

  @Input('text')
  text: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  init = false;
  @Input() data: any | null = null;
  parsedData = null;

  constructor() { }

  ngOnInit(): void {
    this.parsedData = JSON.parse(this.data.data);
    this.init = true;
    console.log(this.parsedData);
  }

}

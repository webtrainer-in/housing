import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input ('property') property : any;
  constructor() { }

  ngOnInit() {
  }

}

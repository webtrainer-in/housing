import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any>=[
    {
      "id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000,
      "image":"house-3"
    },

    {
      "id":2,
      "Name":"Erose Flat",
      "Type":"Aparment",
      "Price":5000,
      "image":"apartment-1"
    },
    {
      "id":3,
      "Name":"Gun Hill",
      "Type":"House",
      "Price":12000,
      "image":"house-hill-2"
    },

    {
      "id":4,
      "Name":"Macro Home",
      "Type":"Duplex",
      "Price":5000,
      "image":"duplex-2"
    },
    {
      "id":5,
      "Name":"Saint Church Villa",
      "Type":"House",
      "Price":12000,
      "image":"house-1"
    },

    {
      "id":6,
      "Name":"Pearl White House",
      "Type":"Duplex",
      "Price":5000,
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

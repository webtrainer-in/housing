import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Properties: string[] = ['Duplex', 'Appartment', 'House']; 
  
  Properties2: Array<any>=[
    {
      "id":1,
      "Type":"House",
      "Price":12000
    },

    {
      "id":2,
      "Type":"Duplex",
      "Price":5000
    },
    {
      "id":1,
      "Type":"House",
      "Price":12000
    },

    {
      "id":2,
      "Type":"Duplex",
      "Price":5000
    },
    {
      "id":1,
      "Type":"House",
      "Price":12000
    },

    {
      "id":2,
      "Type":"Duplex",
      "Price":5000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

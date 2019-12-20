import { Component, OnInit } from '@angular/core';
import { HousingService } from '../Services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  Properties: Array<any>;
  
  constructor(private housingServices:HousingService) { }
  
  ngOnInit() {

    this.housingServices.getAllProperties()
    .subscribe(data=>this.Properties=data);
  }
  }



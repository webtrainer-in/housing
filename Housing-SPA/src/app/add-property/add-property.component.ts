import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HousingService} from '../Services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyTypes: Array<string> = ['House','Apartment','Dupliex'];

  constructor(private router: Router, public housingService: HousingService) { }

  ngOnInit() {
  }

  onAddProperty(data):void  {
    //Add logic to save new property into database
    this.housingService.addProperties(data);    
    this.router.navigate(['/rent-property']);

  }
}

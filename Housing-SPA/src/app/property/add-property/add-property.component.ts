import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HousingService} from '../../Services/housing.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('addPropertyForm',{static:true}) addPropertyForm: NgForm;
  propertyTypes: Array<string> = ['House','Apartment','Duplex'];

  constructor(private router: Router, public housingService: HousingService) { }

  ngOnInit() {
  }

  onAddProperty(data):void  {
    //Add logic to save new property into database
    this.housingService.addProperties(data);  
    this.addPropertyForm.reset();
    this.router.navigate(['/rent-property']);

  }
}

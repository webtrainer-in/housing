import { AlertifyService } from './../../Services/alertify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HousingService} from '../../Services/housing.service';
import { NgForm } from '@angular/forms';
import { Property } from '../../model/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('addPropertyForm', {static: true}) addPropertyForm: NgForm;
  public property =  new Property();

  // Default radiobutton values
  SR = '1';
  Type = '';
  BHK = '';
  FurnishTypes = [
    'Fully Furnished',
    'Semi Furnished',
    'Unfurnished'
  ];

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];

  constructor(
    private router: Router,
    private housingService: HousingService,
    private alertify: AlertifyService ) { }

  ngOnInit() {
  }

  onAddProperty(data: Property): void  {
      // Add logic to save new property into database
      console.log(data);
      this.fillProperty(data);
      this.housingService.addProperties(this.property);
      this.addPropertyForm.reset();
      this.alertify.success('Property Successfully added and listed on the site');

      // Redirect user to the page on the base of Sell and Rent option
      if (data.SellRent ==+ '2') {
        this.router.navigate(['/property-list/2']);
      } else {
        this.router.navigate(['/']);
      }
    }

  fillProperty(data: Property): void {
    this.property.Id = this.getID(data);
    this.property.Image = 'propNA';
    this.property.Name = data.Name;
    this.property.SellRent = +data.SellRent;
    this.property.Price = data.Price;
    this.property.Address = data.Address;
    this.property.City = data.City;
    this.property.Description = data.Description;
    this.property.Type = data.Type;
    localStorage.setItem('PID', String(this.property.Id));
  }


  getID(data: Property) {
    if (localStorage.getItem('PID')) {
      return +localStorage.getItem('PID') + 1;
    } else {
      return 101;
    }
  }

}


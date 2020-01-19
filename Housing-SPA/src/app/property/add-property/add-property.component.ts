import { AlertifyService } from './../../Services/alertify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HousingService} from '../../Services/housing.service';
import { NgForm } from '@angular/forms';
import { Property } from '../../model/property';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('addPropertyForm', {static: true}) addPropertyForm: NgForm;
  @ViewChild('formTabs', { static: true }) formTabs: TabsetComponent;
  public property =  new Property();
  public tmpProp = new Property();

  // Default  values
  FormSubmitted = false;
  FurnishTypes = [
    'Fully',
    'Semi',
    'Unfurnished'
  ];

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];

  constructor(
    private router: Router,
    private housingService: HousingService,
    private alertify: AlertifyService ) { }

  ngOnInit() {
    this.setDefaults();
  }

  setDefaults(): void {
    this.tmpProp.SellRent = 1;
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
    console.log('abc');
    console.log(tabId);
    window.scroll(0, 0);
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
    this.property.SellRent = +data.SellRent;
    this.property.Name = data.Name;
    this.property.Type = data.Type;
    this.property.BHK = data.BHK;
    this.property.Furnishing = data.Furnishing;
    this.property.Price = data.Price;
    this.property.BuiltArea = data.BuiltArea;
    this.property.CarpetArea = data.CarpetArea;
    this.property.FloorNo = data.FloorNo + ' of ' + data.TotalFloor;
    this.property.Address = data.Address;
    this.property.Address2 = data.Address2;
    this.property.Address3 = data.Address3;
    this.property.City = data.City;
    this.property.Description = data.Description;
    this.property.NewOld = +data.AOP > 3 ? 0 : 1;
    this.property.AOP = data.AOP;
    this.property.Bathrooms = data.Bathrooms;
    this.property.MainEntrance = data.MainEntrance;
    this.property.Gated = data.Gated;
    this.property.Security = data.Security;
    this.property.Maintenance = data.Maintenance;
    this.property.Posession = data.Posession;
    this.property.PostedOn = new Date().toString();
    this.property.Image = 'propNA';


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


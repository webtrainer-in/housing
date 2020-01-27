import { AlertifyService } from './../../services/alertify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HousingService} from '../../services/housing.service';
import { NgForm, NgModelGroup } from '@angular/forms';
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
  public nextClicked = false;

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
    // this.setDefaults();
    this.formTabs.tabs[1].disabled = true;
    this.formTabs.tabs[2].disabled = true;
    this.formTabs.tabs[3].disabled = true;
    this.formTabs.tabs[4].disabled = true;
  }

  setDefaults(): void {
    this.tmpProp.SellRent = 1;
  }

  selectTab(tabId: number, isValid: boolean) {
    if (isValid) {
      this.nextClicked = false;
      this.formTabs.tabs[tabId].disabled = false;
      this.formTabs.tabs[tabId].active = true;
      window.scroll(0, 0);
    } else {
      this.alertify.error('There is some error on form, please check the validations');
      this.formTabs.tabs[tabId].disabled = true;
      this.nextClicked = true;
    }
  }

  onAddProperty(data: any): void  {
      // Add logic to save new property into database
      console.log(data);
      this.fillProperty(data);
      this.housingService.addProperties(this.property);
      this.addPropertyForm.reset();
      this.alertify.success('Property Successfully listed on the site');

      // Redirect user to the page on the base of Sell and Rent option
      if (data.BasicInfo.SellRent ==+ '2') {
        this.router.navigate(['/property-list/2']);
      } else {
        this.router.navigate(['/']);
      }
    }

  fillProperty(data: any): void {
    this.property.Id = this.getID();
    this.property.SellRent = +data.BasicInfo.SellRent;
    this.property.BHK = data.BasicInfo.BHK;
    this.property.Type = data.BasicInfo.Type;
    this.property.Name = data.BasicInfo.Name;
    this.property.City = data.BasicInfo.City;
    this.property.Furnishing = data.BasicInfo.Furnishing;
    this.property.Price = data.PricingAreaInfo.Price;
    this.property.Security = data.PricingAreaInfo.Security;
    this.property.Maintenance = data.PricingAreaInfo.Maintenance;
    this.property.BuiltArea = data.PricingAreaInfo.BuiltArea;
    this.property.CarpetArea = data.PricingAreaInfo.CarpetArea;
    this.property.FloorNo = data.AddressInfo.FloorNo;
    this.property.TotalFloor = data.AddressInfo.TotalFloor;
    this.property.Address = data.AddressInfo.Address;
    this.property.Address2 = data.AddressInfo.Address2;
    this.property.Address3 = data.AddressInfo.Address3;
    this.property.RTM = data.RTM;
    this.property.AOP = data.AOP;
    this.property.Gated = data.Gated;
    this.property.MainEntrance = data.MainEntrance;
    this.property.AOP = data.AOP;
    this.property.Posession = data.Posession;
    this.property.Description = data.Description;
    this.property.Image = 'propNA';
    this.property.PostedOn = new Date().toString();


    localStorage.setItem('PID', String(this.property.Id));

  }


  getID() {
    if (localStorage.getItem('PID')) {
      return +localStorage.getItem('PID') + 1;
    } else {
      return 101;
    }
  }

}


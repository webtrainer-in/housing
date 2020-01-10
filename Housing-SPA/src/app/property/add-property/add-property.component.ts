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
  private property =  new Property();


  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];

  constructor(private router: Router, private housingService: HousingService, private alertify: AlertifyService ) { }

  ngOnInit() {
  }

  onAddProperty(data): void  {
      // Add logic to save new property into database
      this.housingService.addProperties(data);
      this.addPropertyForm.reset();
      this.alertify.success('Property Successfully added and listed on the site');

      // Redirect user to the page on the base of Sell and Rent option
      if (data.SellRent === '2') {
        this.router.navigate(['/property-list/2']);
      } else {
        this.router.navigate(['/']);
      }
    }
}


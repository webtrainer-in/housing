import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../Services/housing.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  private Properties: Array<Property>;
  private LocalProperties: Array<Property>;
  private NewProperty: any;

  constructor(
    private housingServices: HousingService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    const PropertyType = this.route.snapshot.params['SellRent'] ? 2 : 1;

    this.housingServices.getAllProperties(PropertyType)
    .subscribe(
      data => {

      this.getLocalProperties(PropertyType);

      // if local properties are blank, get it from database
      this.LocalProperties ? this.Properties = this.LocalProperties : this.Properties = data;

      this.NewProperty = JSON.parse(localStorage.getItem('newProp'));

      if (this.NewProperty) {
        this.saveNewPropertyToLocalStorage();
      }
      },
      error => console.log(error.statusText)
      );

    // This will always run first but we are not using it now as we are getting new property from local storage
    this.route.data.subscribe(
        (data: Data) => {
        this.NewProperty = data['prp'];
      }
    );

  // Subject like below will work only in case both add-property and 
  // list component both on same page, it will not work in case of routng, we need to use route resolver to resolve the problem

  //  this.housingServices.newPropertySubject.subscribe(
  //    data=>{
  //     this.NewProperty=data;
  //      console.log("I am in subject suscriber");
  //      console.log(this.NewProperty);

  //    }
  //   );
  }

  saveNewPropertyToLocalStorage() {
    this.Properties = [this.NewProperty, ...this.Properties];

    if (this.NewProperty.SellRent === '1') {
      localStorage.setItem('BuyProperties', JSON.stringify(this.Properties));
    } else if (this.NewProperty.SellRent === '2') {
      localStorage.setItem('RentProperties', JSON.stringify(this.Properties));
    }
    localStorage.removeItem('newProp');
  }

  getLocalProperties(propertyType: number) {
          // Fetch properties on te base of selected menu (Buy or Rent) from local storage
          if (propertyType === 1) {
            this.LocalProperties = JSON.parse(localStorage.getItem('BuyProperties'));
          } else {
            this.LocalProperties = JSON.parse(localStorage.getItem('RentProperties'));
          }
  }
  }



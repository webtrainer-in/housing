import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../Services/housing.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

      if (PropertyType === 1){
        this.LocalProperties = JSON.parse(localStorage.getItem('BuyProperties'));
      } else {
        this.LocalProperties = JSON.parse(localStorage.getItem('RentProperties'));
      }

      this.NewProperty = JSON.parse(localStorage.getItem('newProp'));

      if (this.LocalProperties) {
          this.Properties = this.LocalProperties;
        } else {
          this.Properties = data;
        }

      if (this.NewProperty) {
      this.Properties = [this.NewProperty, ...this.Properties];

      if (PropertyType === 1){
        localStorage.setItem('BuyProperties', JSON.stringify(this.Properties));
      } else {
        localStorage.setItem('RentProperties', JSON.stringify(this.Properties));
      }

      localStorage.removeItem('newProp');
      console.log('hey sandy');
      console.log(this.Properties);
      console.log(JSON.parse(localStorage.getItem('Properties')));
      }
      },
      error => console.log(error.statusText)
      );



    // This will always run first
    this.route.data.subscribe(
        (data: Data) => {
        this.NewProperty = data['prp'];
        console.log('I am in resolver suscriber');
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
  }



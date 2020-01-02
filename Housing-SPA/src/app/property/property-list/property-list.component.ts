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

  private Properties: Array<any>;
  private NewProperty:any;

  constructor(private housingServices:HousingService,
    private route:ActivatedRoute,
    private router:Router) { }
  
  ngOnInit() {

    this.housingServices.getAllProperties()
    .subscribe(
      data => {
      this.Properties=data;       
      if (this.NewProperty)
      this.Properties=[this.NewProperty,...this.Properties];      
      console.log("I am in GetAllProperties subscriber");
      console.log(this.NewProperty);
      },
      error => console.log(error.statusText)
      );

    //This will always run first  
    this.route.data.subscribe(
      (data: Data) => {
        this.NewProperty=data['prp'];
        console.log("I am in resolver suscriber");
      }
    );

  //Subject like below will work only in case both add-property and 
  //list component both on same page, it will not work in case of routng, we need to use route resolver to resolve the problem

  //  this.housingServices.newPropertySubject.subscribe(
  //    data=>{
  //     this.NewProperty=data;
  //      console.log("I am in subject suscriber");
  //      console.log(this.NewProperty);

  //    }      
  //   );
  }
  }



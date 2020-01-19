import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../Services/housing.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Array<Property>;
  private newProperty: any;
  public allProperties: Array<Property>;
  public List: string;

  constructor(
    private housingServices: HousingService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    const propertyType = this.route.snapshot.params['SellRent'] ? 2 : 1;
    this.List = 'List';

    this.housingServices.getAllPropertiesByType(propertyType)
    .subscribe(
      data => {
        // if local properties are blank, get it from database
        this.properties = data;

        this.newProperty = JSON.parse(localStorage.getItem('newProp'));


        if (this.newProperty) {
          this.properties = [this.newProperty, ...this.properties];
          this.saveNewPropertyToLocalStorage();
        }
      },
      error => console.log(error.statusText)
      );

    // This will always run first but we are not using it now as we are getting new property from local storage
    this.route.data.subscribe(
        (data: Data) => {
        this.newProperty = data['prp'];
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
    this.housingServices.getAllProperties().subscribe(
      data => {

        if (localStorage.getItem('Properties')) {
          data = JSON.parse(localStorage.getItem('Properties'));
        }
        this.allProperties = [this.newProperty, ...data];
        localStorage.setItem('Properties', JSON.stringify(this.allProperties));
        localStorage.removeItem('newProp');
       });
  }
  }



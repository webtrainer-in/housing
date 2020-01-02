import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  private property: any;
  private propertyid:number
  private properties: Property[];

  constructor(private route: ActivatedRoute, private housingServices:HousingService) { }

  ngOnInit() {

    this.propertyid=this.route.snapshot.params['id'];
    console.log(this.propertyid);
    this.housingServices.getAllProperties()
    .subscribe(
      data => {
        this.properties=data;
        this.property=this.housingServices.getProperty(+this.propertyid,this.properties);
        console.log(this.properties);
        console.log(this.property );
      },
      error => console.log(error.statusText)
      );
  }

}

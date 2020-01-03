import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input ('property') property : Property;
  constructor(private router: Router, public housingService: HousingService) { }

  ngOnInit() {
  }

  onViewDetailClick(property)
  {
    this.housingService.getAllPropertiesLocal(property);
    this.router.navigate(["/property-detail/"+property.Id]);
    console.log(property);
  }

}

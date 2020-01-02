import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HousingService } from '../Services/housing.service';
import { Injectable } from '@angular/core';



@Injectable()
export class PropertyDetailResolver implements Resolve<Property>{
    private property: Property;
    constructor(private housingServices: HousingService)
    {

    }
  
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Property
    {
         this.housingServices.PropertyListSubject.subscribe(
             data=>this.property=data);
        return this.property;      
    }
}
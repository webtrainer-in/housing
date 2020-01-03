import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HousingService } from '../Services/housing.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';



@Injectable()
export class PropertyDetailResolver implements Resolve<Property>{
    
    propertyid:number;
    private properties: Property[];
    

    private property: Property;
    constructor(private router: Router, private housingServices: HousingService)
    {

    }
  
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any>|Property
    {
        this.propertyid=route.params['id'];
        return this.housingServices.getProperty(+this.propertyid).pipe(
            catchError(error=>{
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties()
  {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        //console.log(responseData);
        const PropertiesArray = [];
        for (const id in responseData) {
            PropertiesArray.push(responseData[id]);
        }
        //console.log(PropertiesArray);
        return PropertiesArray; 
      })
    )
  }
}

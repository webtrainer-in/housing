import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  public newPropertySubject = new Subject<any>();

  constructor(private http:HttpClient) { }

  getAllProperties()
  {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        const propertiesArray = [];
        for (const id in responseData) {
            propertiesArray.push(responseData[id]);
        }
        return propertiesArray; 
      })
    )
  }

  addProperties(data)
  {
    this.newPropertySubject.next(data);
  }
}

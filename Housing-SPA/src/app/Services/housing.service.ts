import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  public newPropertySubject = new Subject<any>();
  public PropertyListSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Get all properties from API
  getAllProperties(SellRent: number) {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        const propertiesArray = [];
        for (const id in responseData) {
          if (responseData[id].SellRent === SellRent) {
            propertiesArray.push(responseData[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  // Get single property by ID from API
  getProperty(id: number) {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        const propertiesArray = [];
        for (const id in responseData) {
            propertiesArray.push(responseData[id]);
        }
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  addProperties(data) {
    this.newPropertySubject.next(data);
  }
}

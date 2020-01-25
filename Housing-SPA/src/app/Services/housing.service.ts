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
  getAllPropertiesByType(SellRent: number) {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {

        if (this.getLocalProperties()) {
          responseData = this.getLocalProperties();
        }
        const propertiesArray = [];
        for (const id in responseData) {
          if (responseData[id].SellRent == SellRent) {
            propertiesArray.push(responseData[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  getAllProperties() {
    return this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        const propertiesArray = [];
        for (const id in responseData) {          
          propertiesArray.push(responseData[id]);
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

        if (localStorage.getItem('Properties')) {
          responseData = JSON.parse(localStorage.getItem('Properties'));
        }

          for (const id in responseData) {
            propertiesArray.push(responseData[id]);
        }
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getLocalProperties() {
    return JSON.parse(localStorage.getItem('Properties'));
  }


  addProperties(data) {
    localStorage.setItem('newProp', JSON.stringify(data));
    this.newPropertySubject.next(data);
  }

  addUser(data) {
      let users = [];
      if (localStorage.getItem('Users')) {
        users = JSON.parse(localStorage.getItem('Users'));
        users = [data, ...users];
      } else {
        users = [data];
      }
      localStorage.setItem('Users', JSON.stringify(users));
    }
}
